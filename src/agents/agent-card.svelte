<script>
  import Icon from 'fa-svelte'
  import { faAngleRight, faBaby } from '@fortawesome/free-solid-svg-icons';

  export let agent;
  let expanded = false;
</script>

<div class="agent-card">
  <!-- {#each props as prop} -->
    <div class="agent-card-image"><Icon icon={faBaby}></Icon></div>
    <span class="agent-card-title">{agent.name}</span>
    <button class="agent-card-expand"><Icon icon={faAngleRight}></Icon></button>
  <!-- {/each} -->
</div>

<style>
  .agent-card {
    max-width: 100%;
    min-width: 480px;
    flex: 1;
    height: 120px;
    margin: 12px;
    background: #0ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .agent-card-title {
    font-size: 2em;
  }

  .agent-card-image {
    width: 90px;
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
</style>