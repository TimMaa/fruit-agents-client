<script>
  import AgentCard from './agent-card.svelte';
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
    <AgentCard {agent}></AgentCard>
  {/each}
</div>

<style>
  .agent-container {
    display: flex;
    flex-flow: row wrap;
  }
</style>