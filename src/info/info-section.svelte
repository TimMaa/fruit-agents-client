<script>
  import { get } from 'svelte/store';
  import { fade } from 'svelte/transition';

  import InfoBox from './info-box.svelte';
  import { agents, missions } from '../store.js';

  const boxes = [
    {
      color: '#ff6680',
      missionId: '1',
    },
    {
      color: '#00ff00',
      missionId: '2',
    },
    {
      color: 'yellow',
      missionId: '3',
    }
  ]

  const loadMission = id => {
    const missionInfo = get(missions).find(m => m.id === id);
    const agentInfo = get(agents).find(a => a.id === missionInfo.agentId);
    return { id, agentInfo }
  }
</script>

<div class="info-container">
  {#each boxes as box, idx}
    <div class="box" transition:fade="{{delay: idx*250, duration: 500}}" style="--color:{box.color}">
      <InfoBox boxIdx={idx} mission={loadMission(box.missionId)}/>
    </div>
  {/each}
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
    color: #333;
    background-color: var(--color);
    min-width: 400px;
    width: 25%;
    height: 240px;
    margin: 20px;
    padding: 1em;
  }
</style>
