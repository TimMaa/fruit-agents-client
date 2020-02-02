<script>
  import AgentCard from './agent-card.svelte';
  import { agents } from '../store.js';
</script>

<div class="agent-container">
  {#each $agents as agent}
    <AgentCard {agent}></AgentCard>
  {/each}
</div>

<style>
  .agent-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1260px) {
    .agent-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 780px) {
    .agent-container {
      grid-template-columns: 1fr;
    }
  }
</style>