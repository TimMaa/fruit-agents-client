<script>
  import { faAngleRight, faBaby } from '@fortawesome/free-solid-svg-icons';
  import Icon from 'fa-svelte'
  import moment from 'moment';
  import { fly, slide } from 'svelte/transition';
  
  import { gqlQuery } from '../services/graphql.js';

  export let agent;
  let expanded; 
  $: expanded = false;
  let detailsPromise;

  const props = [
    { id: 'mis-prev', label: 'Previous Mission', value: moment().format('DD. MMM') },
    { id: 'mis-next', label: 'Next Mission', value: moment().add(28, 'd').format('DD. MMM') },
    { id: 'rat-avg', label: 'Avg. Rating', value: 1.6 },
  ];

  async function getDetails() {
    const res = await gqlQuery(`{ agent(id: ${agent.id}) { previousMission { end } nextMission { start } averageRating } }`)
    const details = [ 
      { label: 'Previous Mission', value: res.data.agent.previousMission ? moment.unix(res.data.agent.previousMission.end).format('DD. MMM') : null },
      { label: 'Next Mission', value: res.data.agent.nextMission ? moment.unix(res.data.agent.nextMission.start).format('DD. MMM') : null },
      { label: 'Avg. Rating', value: res.data.agent.averageRating },
    ]
    return details;
  }

  const expandClickHandler = () => {
    detailsPromise = getDetails();
    expanded = !expanded;
  }
  
</script>

<div transition:fly="{{ x: (Math.random()*400 * (Math.random() > 0.5 ? 1 : -1)), y: (Math.random()*200 * (Math.random() > 0.5 ? 1 : -1)), duration: 750 }}" class="agent-card-container">
  <div class="agent-card">
    <div class="agent-card-image" style="background-image: url({agent.photoUrl})">
      {#if !agent.photoUrl}<Icon icon={faBaby}></Icon>{/if}
    </div>
    <span class="agent-card-title">{agent.name}</span>
    <button class="agent-card-expand" on:click={expandClickHandler}>
      <Icon icon={faAngleRight}></Icon>
    </button>
  </div>
  {#if expanded}
    <div transition:slide class="agent-details">
      {#await detailsPromise}
        ...loading
      {:then props}
        {#each props as prop}
          <div class="agent-details-category">
            <div class="category-value">{prop.value || 'n/a'}</div>
            <div class="category-label">{prop.label}</div>
          </div>
        {/each}
      {/await}
    </div>
  {/if}
</div>

<style>
  .agent-card-container {
    position: relative;
    margin: 12px;
  }

  .agent-card {
    height: 150px;
    background: var(--fa-blue);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .agent-card-title {
    font-size: 2em;
  }

  .agent-card-image {
    width: 120px;
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5em;
    background-position: center;
    background-size: 100%;
  }

  .agent-card-image > * {
    width: 100%;
    height: 100%;
  }

  .agent-card-expand {
    background: transparent;
    border: none;
    height: 100%;
    margin: 0;
    font-size: 2em;
  }

  .agent-details {
    height: 180px;
    background: var(--fa-light);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .agent-details-category {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .category-value {
    font-size: 2em;
    font-weight: 700;
  }

  .category-label {

  }
</style>