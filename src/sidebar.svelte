<script>
  import Icon from 'fa-svelte'
  import { fly } from 'svelte/transition';
  import { faCalendarAlt, faHome, faList, faPlus } from '@fortawesome/free-solid-svg-icons'
  import { Link } from 'svelte-routing'

  const sidebarItems = [
    {
      icon: faHome,
      title: 'Dashboard',
      href: '/'
    },
    {
      icon: faCalendarAlt,
      title: 'Calendar',
      href: '/calendar'

    },
    {
      icon: faPlus,
      title: 'New Agent',
      href: '/agents/new'
    },
    {
      icon: faList,
      title: 'Overview',
      href: '/agents'
    }
  ]
</script>

<div class="sidebar-container" transition:fly="{{ x: -400, duration: 500 }}">
  {#each sidebarItems as item}
    <Link className="btn sidebar-action-item" to={item.href}>
      <Icon icon={item.icon}/>
      <span>{item.title}</span>
    </Link>
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
    box-shadow: 3px 0px 6px 0px #0ff;
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