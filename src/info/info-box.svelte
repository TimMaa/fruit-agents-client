<script>
  export let boxIdx;
  export let color;
  export let name;

  const titles = [
    'Previous Agent',
    'Current Agent',
    'Next Agent',
  ];

  let ratingDone = false;

  const rate = (rating) => {
    // TODO: Some backend call to submit the rating
    if(ratingDone) return;
    fetch(`mybackend/rate/${boxIdx}/${rating}`)
    ratingDone = true;
    
  }
</script>

<div class="box" style="--color:{color}">
  <h2 class="box-title">{titles[boxIdx]}</h2>
  <span class="agent">{name}</span>
  {#if boxIdx !== 2}
    <div class="rating-container">
      Rate now!
      <div class="rating">
        <button class="btn" on:click|once={() => rate(1)}>&#9734;</button>
        <button class="btn" on:click|once={() => rate(2)}>&#9734;</button>
        <button class="btn" on:click|once={() => rate(3)}>&#9734;</button>
        <button class="btn" on:click|once={() => rate(4)}>&#9734;</button>
        <button class="btn" on:click|once={() => rate(5)}>&#9734;</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .box {
    color: #333;
    background-color: var(--color);
    min-width: 400px;
    width: 25%;
    height: 240px;
    margin: 20px;
    padding: 1em;
  }

  .box-title {
    opacity: .9;
    margin: 0;
  }

  .agent {
    font-size: 4em;
  }

  .rating {
    font-size: 2em;
  }

  .rating > button {
    background: none;
    outline: none;
    border: none;
    color: #333;
    margin: 0;
    cursor: pointer;
  }
</style>
