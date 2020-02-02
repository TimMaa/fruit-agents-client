<script>
  import Icon from 'fa-svelte'
  import { faBaby } from '@fortawesome/free-solid-svg-icons';

  import { agents } from '../store.js';

  const props = [
    { id: 'name', label: 'Name' },
    { id: 'mis-prev', label: 'Previous Mission' },
    { id: 'mis-next', label: 'Next Mission' },
    { id: 'rat-prev', label: 'Previous Rating' },
    { id: 'rat-avg', label: 'Avg. Rating' },
  ];
</script>

<div class="agent-container">
  {#each $agents as agent}
    <div class="agent-card">
      <!-- {#each props as prop} -->
        <div class="agent-card-image"><Icon icon={faBaby}></Icon></div>
        <div class="agent-card-title">{agent.name}</div>
      <!-- {/each} -->
    </div>
  {/each}
</div>

<!-- <div class="cell cell-foot header">Image</div> -->

<style>
  .agent-container {
    display: flex;
    flex-flow: row wrap;
  }

  .agent-card {
    max-width: 100%;
    width: 360px;
    height: 120px;
    margin: 12px;
    background: #0ff;
    display: flex;
  }

  .agent-card-title {
    font-size: 2em;
  }

  .agent-card-image {
    width: 90px;
    background: #999;
  }

  .agent-card-image > * {
    width: 100%;
    height: 100%;
  }
</style>