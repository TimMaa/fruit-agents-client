<script>
  import { faAngleRight, faBaby } from '@fortawesome/free-solid-svg-icons';
  import Icon from 'fa-svelte'
  import moment from 'moment';
  import { slide } from 'svelte/transition';

  export let agent;
  let expanded; 
  $: expanded = false;

  const props = [
    { id: 'mis-prev', label: 'Previous Mission', value: moment().format('DD. MMM') },
    { id: 'mis-next', label: 'Next Mission', value: moment().add(28, 'd').format('DD. MMM') },
    { id: 'rat-prev', label: 'Previous Rating', value: 3.5 },
    { id: 'rat-avg', label: 'Avg. Rating', value: 1.6 },
  ];

  const expandClickHandler = () => {
    expanded = !expanded;
  }
</script>

<div class="agent-card-container">
  <div class="agent-card">
    <div class="agent-card-image"><Icon icon={faBaby}></Icon></div>
    <span class="agent-card-title">{agent.name}</span>
    <button class="agent-card-expand" on:click={expandClickHandler}>
      <Icon icon={faAngleRight}></Icon>
    </button>
  </div>
  {#if expanded}
    <div transition:slide class="agent-details">
      {#each props as prop}
        <div class="agent-details-category">
          <div class="category-value">{prop.value || 'n/a'}</div>
          <div class="category-label">{prop.label}</div>
        </div>
      {/each}
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
    background: #0ff;
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
    background: #999;
    font-size: 5em;
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
    background: #eee;
    display: grid;
    grid-template-columns: 1fr 1fr;
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