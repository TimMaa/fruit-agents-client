<script>
  import { fade } from 'svelte/transition';

  import { gqlQuery, gqlMutation } from '../services/graphql.js';
  import StarRating from './star-rating.svelte';


  export let boxIdx;
  export let mission;

  const titles = [
    'Previous Agent',
    'Current Agent',
    'Next Agent',
  ];

  const rate = (rating) => gqlMutation(`addRating(missionId: "${mission.id}", score: ${rating}){ id score }`).then(res => console.log(res));
</script>
<div>
  <h2 class="box-title">{titles[boxIdx]}</h2>
  <span class="agent">{mission.agent.name}</span>
  {#if boxIdx !== 2}
    <div class="rating-container">
      <StarRating rating={mission.averageRating} rateCb={rate}></StarRating>
    </div>
  {/if}
</div>

<style>
  .box-title {
    opacity: .9;
    margin: 0;
  }

  .agent {
    font-size: 5em;
  }
</style>
