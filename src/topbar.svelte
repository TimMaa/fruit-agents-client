<script>
  import Icon from 'fa-svelte'
  import { faBars } from '@fortawesome/free-solid-svg-icons'
  import { tweened } from 'svelte/motion'
  import { get } from 'svelte/store'

  import { sidebarState } from './store.js'

  let buttonRotation = tweened(0);

  const menubuttonClickHandler = () => {
    sidebarState.set(!$sidebarState);
    buttonRotation.set(get(sidebarState) ? 180 : 0);
  }

  let menubuttonElement;
  document.body.addEventListener('click', e => get(sidebarState) && !e.path.find(el => el === menubuttonElement) && menubuttonClickHandler(), true); 
</script>

<div class="topbar">
  <button class="btn menu-button" bind:this={menubuttonElement} on:click={menubuttonClickHandler} style="transform: rotate({$buttonRotation}deg)">
    <Icon class="menu-button-icon" icon={faBars}></Icon>
  </button>
  <h1 class="title">Center Fruit Agents</h1>
</div>

<style>
  .topbar {
    position: fixed;
    left: 0;
    top: 0;
    background-color: var(--fa-dark);
    box-sizing: border-box;
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 24px;
    z-index: 1000;
  }

  .menu-button {
    color: white;
    font-size: 3em;

    display: flex;
    align-items: center;
  }

  .title {
    margin: 0;
    margin-left: 36px;
    color: white;
    text-transform: uppercase;
    font-size: 5em;
    font-weight: 100;
  }

  @media (max-width: 780px) {
    .title {
      font-size: 3em;
    }
  }
</style>