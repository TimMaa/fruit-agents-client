<script>
  import Icon from 'fa-svelte'
  import { fly } from 'svelte/transition';
  import { faCalendarAlt, faHome, faList, faPlus } from '@fortawesome/free-solid-svg-icons'

  const sidebarItems = [
    {
      icon: faHome,
      title: 'Dashboard',
      link: '/'
    },
    {
      icon: faCalendarAlt,
      title: 'Calendar'
    },
    {
      icon: faPlus,
      title: 'New Agent'
    },
    {
      icon: faList,
      title: 'Overview'
    }
  ]
</script>

<div class="sidebar-container" transition:fly="{{ x: -400, duration: 500 }}">
  {#each sidebarItems as item}
    <a class="btn sidebar-action-item" href={item.link}>
      <Icon icon={item.icon}/>
      <span>{item.title}</span>
    </a>
  {/each}
</div>

<style>
  .sidebar-container {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 400px;
    max-width: 100vw;
    height: 100%;
    padding-top: 100px;
    background-color: #333;
    z-index: 900;
  }

  .sidebar-action-item {
    width: 100%;
    color: white;
    padding-left: 36px;
    margin: 6px 0;
    text-align: left;
    font-size: 1.5em;

    display: flex;
    align-items: center;
  }

  .sidebar-action-item > span {
    margin-left: 48px;
  }

  .sidebar-action-item:hover {
    background: #222;
  }
</style>