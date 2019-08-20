<script>
  import Icon from "../components/icon.svelte";
  import * as allIcons from "@ant-design/icons/lib/dist";

  var icons = Object.keys(allIcons)
    .map(key => allIcons[key])
    .filter(e => e.name && (e.theme === "fill" || e.theme === "outline"));
  console.log("icons", icons);
</script>
<!--
<h1>Look! Its an icon!</h1>
{#each icons as icon}
  <Icon type={icon.name} theme={icon.theme} />
{/each}

<span>Icon component not implemented</span>