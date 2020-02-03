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

  const colors = [ '--fa-red', '--fa-green', '--fa-blue', '--fa-yellow' ];

  const linkProps = () => ({ class: "btn sidebar-action-item" });
</script>

<div class="sidebar-container" transition:fly="{{ x: -400, duration: 500 }}" style="--shadow-color: var({colors[Math.floor(Math.random() * colors.length)]})">
  {#each sidebarItems as item}
    <Link getProps={linkProps} to={item.href}>
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
    background-color: var(--fa-dark);
    z-index: 900;
    box-shadow: 10px 0px 30px 0px var(--shadow-color);
    animation: pulse 2s infinite alternate;
  }
  
@keyframes pulse {
  0% {
    box-shadow: 10px 0px 30px 0px var(--shadow-color);
  }
  100% {
    box-shadow: -5px 0px 20px 0px var(--shadow-color);
  }
}

  :global(.sidebar-action-item) {
    width: 100%;
    height: 90px;
    color: white !important;
    padding-left: 36px;
    margin: 6px 0;
    text-align: left;
    font-size: 2em;

    display: flex;
    align-items: center;
  }

  :global(.sidebar-action-item > span) {
    margin-left: 48px;
  }

  :global(.sidebar-action-item:hover) {
    background: #222;
  }
</style>