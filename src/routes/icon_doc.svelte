<script>
  import Icon from "../components/icon.svelte";
  import * as allIcons from "@ant-design/icons/lib/dist";
  import { fade } from "svelte/transition";

  var sortByNameThenTheme = (a, b) => {
    var nameComp = a.name.localeCompare(b.name, "en");
    var themeComp = a.theme.localeCompare(b.theme, "en");
    if (themeComp === 0) {
      return nameComp;
    }
    return themeComp;
  };

  var sortByThemeThenName = (a, b) => {
    var nameComp = a.name.localeCompare(b.name, "en");
    var themeComp = a.theme.localeCompare(b.theme, "en");
    if (nameComp === 0) {
      return themeComp;
    }
    return nameComp;
  };

  var selectedIcon;
  var byName = false;
  var icons = [];

  $: icons = Object.keys(allIcons)
    .map(key => allIcons[key])
    .filter(e => e.name && e.theme)
    .map(i => ({
      name: i.name,
      theme: i.theme,
      id: i.name + "." + i.theme + "_text",
      html: `<Icon type="${i.name}" theme="${i.theme}" />`
    }))
    .sort(byName ? sortByNameThenTheme : sortByThemeThenName);

  function onClick(icon) {
    console.log("icon", icon);

    selectedIcon = icon;
    var text = icon.name + "." + icon.theme + "_text";
    var thing = document.getElementById(text);
    thing.select();
    document.execCommand("copy");
  }

  function toggleSort(e) {
    byName = e.target.checked;
  }
</script>

<style>
  .wrapper {
    display: flex;
    flex-flow: wrap;
    width: 100%;
  }

  .icon-box {
    flex: 0 1 auto;
    text-align: center;
    padding-bottom: 20px;
    width: 150px;
  }

  textarea {
    border: none;
    resize: none;
    user-select: none;
    cursor: pointer;
    display: none;
  }
</style>

<h1>Icon</h1>
<section>
  <h2>Usage</h2>
  <p>The Icon element are used thus:</p>
  <pre>
    {'<Icon type="close-circle" theme="outline" color="black" />'}
    <Icon type="close-circle" theme="outline" color="black" />
  </pre>
  <p>
    The property theme is optional and defaults to outline.
    <br />
    The property color is optional and defaults to black The property color is
    optional and defaults to black
  </p>
  <p>
    If you want to use the twotone theme there's another optional attribute
    called twoToneColor that's used for the second color.
  </p>
  <pre>
    {'<Icon type="close-circle" theme="twotone" color="black" twoToneColor="red" />'}
    <Icon
      type="close-circle"
      theme="twotone"
      color="black"
      twoToneColor="red" />
  </pre>
  <p>The property twoToneColor is optional and defaults to #80e8ff</p>
</section>
<h2>Available icons:</h2>
{#if selectedIcon}
  <Icon size="8em" type={selectedIcon.name} theme={selectedIcon.theme} />
  <pre>{selectedIcon.html}</pre>
{/if}

<div>{icons.length} icons available</div>
<div style="padding-bottom:20px">
  <input
    type="checkbox"
    id="sortorder"
    name="sortorder"
    on:change={toggleSort} />
  <label for="sortorder">Sort by name:</label>
</div>
<div class="wrapper">
  {#each icons as icon}
    <div in:fade class="icon-box" on:click={e => onClick(icon)}>
      <Icon type={icon.name} theme={icon.theme} />
      <br />
      <span>{icon.name} - {icon.theme}</span>
      <textarea id={icon.id} readonly>{icon.html}</textarea>
    </div>
  {/each}
</div>
