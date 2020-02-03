<script>
  import { fade } from 'svelte/transition';

  import ratingService from '../services/ratingService.js';
  import { ratings } from '../store.js';

  export let boxIdx;
  export let mission;

  const titles = [
    'Previous Agent',
    'Current Agent',
    'Next Agent',
  ];

  const rate = (id, rating) => ratingService.addRating(id, rating);

  $: missionRating = $ratings.find(rating => rating.id === mission.agent.id) || {};
</script>
<div>
  <h2 class="box-title">{titles[boxIdx]}</h2>
  <span class="agent">{mission.agent.name}</span>
  {#if boxIdx !== 2}
    <div class="rating-container">
      Rate now!
      <div class="rating">
        {#each [1,2,3,4,5] as val}
          <button class="btn" on:click|once={() => rate(mission.id, val)}>
            {#if missionRating.rating >= val}
              <span>♥</span>
            {:else}
              <span>&#9734;</span>
            {/if}
          </button>
        {/each}
      </div>
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

  .rating {
    font-size: 3em;
  }

  .rating > button {
    background: none;
    outline: none;
    border: none;
    color: var(--fa-dark);
    margin: 0;
    cursor: pointer;
  }

  .rating > button.rated {
    background-color: var(--fa-dark);
  }
</style>
