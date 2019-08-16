<script>
  export let name;

  import Icon from "./components/icon.svelte";
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<Icon type="save" />
