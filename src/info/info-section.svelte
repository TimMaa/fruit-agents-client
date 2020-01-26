<script>
  import InfoBox from './info-box.svelte'

  const boxes = [
    {
      color: '#ff6680',
      name: 'Marco'
    },
    {
      color: '#00ff00',
      name: 'Matthias'
    },
    {
      color: 'yellow',
      name: 'Til'
    }
  ]
</script>

<div class="info-container">
  {#each boxes as box, idx}
    <InfoBox boxIdx={idx} color={box.color} name={box.name}/>
  {/each}
</div>

<style>
  .info-container {
    height: 100%;
    
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex: 0;
  }
</style>
