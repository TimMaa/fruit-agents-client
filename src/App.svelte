<script>
  import Sidebar from './sidebar.svelte'
  import Topbar from './topbar.svelte'
  import InfoSection from './info/info-section.svelte'
  import Calendar from './calendar.svelte'

  import { sidebarState } from './store.js'
</script>

<main>
  {#if $sidebarState}
    <Sidebar/>
  {/if}
  <Topbar/>
  <InfoSection/>
  <Calendar/>
</main>

<style>
  :global(body, html) {
    background-color: #333;
    padding: 0;
    margin: 0;
  }

  :global(.btn) {
    box-sizing: border-box;
    background: none;
    outline: none;
    border: none;
    color: white;
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
    
    display: flex;
    flex-direction: column;
  }
</style>