<script>
  import { fade } from 'svelte/transition';
  import { get } from 'svelte/store';

  import InfoBox from './info-box.svelte';
  import { gqlQuery } from '../services/graphql.js';

  let boxesPromise;

  async function getMissionBoxes() {
    const boxes = await Promise.all([
      gqlQuery('{ previousMission { id averageRating agent { id name } } }'),
      gqlQuery('{ activeMission { id averageRating agent { id name } } }'),
      gqlQuery('{ nextMission { id averageRating agent { id name } } }'),
    ]).then(([previous, active, next]) => [
      {
        color: 'var(--fa-red)',
        mission: previous.data.previousMission,
      },
      {
        color: 'var(--fa-green)',
        mission: active.data.activeMission,
      },
      {
        color: 'var(--fa-yellow)',
        mission: next.data.nextMission,
      }
    ]);
    console.log(boxes);
    return boxes;
  }

  $: boxesPromise = getMissionBoxes();
</script>

<div class="info-container">
  {#await boxesPromise}
    loading...
  {:then boxes}
    {#each boxes as box, idx}
      <div class="box" in:fade="{{delay: idx*250, duration: 500}}" style="--color:{box.color}">
        <InfoBox boxIdx={idx} mission={box.mission}/>
      </div>
    {/each}
  {/await}
</div>

<style>
  .info-container {
    height: 100%;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex: 0;
  }

  .box {
    color: var(--fa-dark);
    background-color: var(--color);
    min-width: 400px;
    width: 25%;
    height: 240px;
    margin: 20px;
    padding: 1em;
  }
</style>
