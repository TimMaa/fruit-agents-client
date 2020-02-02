<script>
  import AgentCard from './agent-card.svelte';
  import { queryGQL } from '../services/graphql.js';

  async function getAgents() {
    const res = await queryGQL(`{ agents { id name photoUrl } }`)
    return res.data.agents;
  }

  let agentsPromise = getAgents();
</script>

<div class="agent-container">
  {#await agentsPromise}
    <div>...loading</div>
  {:then agents}
    {#each agents as agent}
      <AgentCard {agent}></AgentCard>
    {/each}
  {/await}
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