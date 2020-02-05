<script>
  import Icon from 'fa-svelte';
  import { fly } from 'svelte/transition';
  import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

  const fruits = [
    {
      name: "Banana",
      type: "sweet",
      supporters: 12,
      userRank: 1,
    },
    {
      name: "Apple",
      type: "sweet",
      supporters: -3,
      userRank: 3,
    },
    {
      name: "Pepper",
      type: "savoury",
      supporters: 4,
      userRank: 2,
    },
    {
      name: "Jägermeister",
      type: "drink",
      supporters: 9001,
      userRank: 4,
    },
    {
      name: "Strawberry",
      type: "sweet",
      supporters: 65,
      userRank: 8,
    },
    {
      name: "Tomato",
      type: "savoury",
      supporters: 37,
      userRank: 6,
    },
  ]

  function getColor(type) {
    switch(type) {
      case 'sweet': return '--fa-yellow'
      case 'savoury': return '--fa-red'
      case 'drink': return '--fa-blue'
      default: return '--fa-light'
    }
  }

  const sortBy = (prop, asc) => (a, b) => a[prop] < b[prop] ? asc ? -1 : 1 : asc ? 1 : -1;
</script>

<div class="fruit-overview">
  <div class="fruit-list-container">
    <div>
      <h2 transition:fly="{{ y: fruits.length*150, duration: fruits.length*200 }}" class="fruit-list-title">Your Picks</h2>
    </div>
    <ul class="your-fruits">
      {#each fruits.sort(sortBy('userRank')) as fruit, idx}
        <li in:fly="{{ delay: (fruits.length-idx)*200, x: -200 }}" out:fly="{{ delay: idx*200, x: -200 }}" style="--bgColor: var({getColor(fruit.type, true)})">
          <span class="name">{fruit.name}</span>
          <Icon icon={faGripHorizontal}></Icon>
        </li>
      {/each}
    </ul>
  </div>
  <div class="fruit-list-container">
    <div>
      <h2 transition:fly="{{ y: fruits.length*150, duration: fruits.length*200 }}" class="fruit-list-title">Top Choices</h2>
    </div>
    <ul class="top-fruits">
      {#each fruits.sort(sortBy('supporters')) as fruit, idx}
        <li in:fly="{{ delay: (fruits.length-idx)*200, x: 200 }}" out:fly="{{ delay: idx*200, x: 200 }}" style="--bgColor: var({getColor(fruit.type)})">
          <span class="name">{fruit.name}</span>
          <span class="supporters">{fruit.supporters}</span>
        </li>
      {/each}
    </ul>
  </div>
</div>


<style>
  .fruit-overview {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    color: var(--fa-light);
  }

  .fruit-list-container {
    display: flex;
  }

  .fruit-list-title {
    font-size: 4em;
    margin: 0;
    writing-mode: vertical-lr;
    text-orientation: upright;
    text-align: start;
    position: sticky;
    top: 100px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    height: 150px;
    background-color: var(--bgColor);
    color: var(--fa-dark);
    font-weight: 700;
    margin: 6px 0;
    font-size: 3em;
    width: 480px;
    max-width: 100%;
    text-align: start;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 780px) {
    .fruit-list-title {
      margin-right: 30px;
    }
  }
</style>