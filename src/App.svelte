<script>
  import { Route, Router } from 'svelte-routing'

  import AgentsOverview from './agents/agents-overview.svelte'
  import Calendar from './calendar.svelte'
  import FruitList from './fruits/fruit-list.svelte'
  import InfoSection from './info/info-section.svelte'
  import Sidebar from './sidebar.svelte'
  import Topbar from './topbar.svelte'

  import { sidebarState } from './store.js'

  const routes = [
    { path: '/', component: InfoSection },
    { path: '/agents', component: AgentsOverview },
    { path: '/calendar', component: Calendar },
    { path: '/fruits', component: FruitList },
  ]
</script>

<main>
  <Topbar/>
  <Router>
    {#if $sidebarState}
      <Sidebar/>
    {/if}
    {#each routes as route}
        <Route path={route.path}>
          <div style="position: absolute; width: 100%">
            <svelte:component this={route.component} />
          </div>
        </Route>
    {/each}
  </Router>
</main>

<style>
  :global(html) {
    --fa-dark: #333;
    --fa-light: #eee;
    --fa-red: #ff6680;
    --fa-green: #00ff00;
    --fa-blue: #00ffff;
    --fa-yellow: #ffff00;
    overflow: hidden scroll;
  }

  :global(body, html) {
    background-color: var(--fa-dark);
    padding: 0;
    margin: 0;
    font-size: 12px;
  }

  :global(.btn) {
    box-sizing: border-box;
    background: none;
    outline: none;
    border: none;
    color: var(--fa-light);
    padding: 12px;
    margin: 0;
    cursor: pointer;
  }

  :global(.btn:not(:disabled):active) {
    background: none;
  }

  main {
    text-align: center;
    margin: 0 auto;
    padding-top: 100px;
    height: calc(100vh - 100px);

    display: flex;
    flex-direction: column;
  }
</style>