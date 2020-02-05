<script>
  export let stars = 5;
  export let rating = 0;
  export let rateCb = score => alert(score);
  
  let starObjects = [];
  for(let i = 0; i < stars; i++) {
    starObjects.push(i + 1);
  }
</script>
<div class="rating">
  {#each starObjects.reverse() as star}
    <button class="btn" on:click|once={() => rateCb(star)}>
      {#if star > rating}
        &#9734;
      {:else}
        &#9733;
      {/if}
    </button>
  {/each}
</div>

<style>
  button {
    background: none;
    outline: none;
    border: none;
    color: var(--fa-dark);
    margin: 0;
    cursor: pointer;
  }

  .rating {
    font-size: 3em;
    direction: rtl;
  }

  .rating > button:hover:before,
  .rating > button:hover ~ button:before {
    content: "\2605";
    color: var(--fa-light);
    position: absolute;
  }
</style>
