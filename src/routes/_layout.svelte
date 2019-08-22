<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: [left] 20% [center] 70% [right] 10%;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
