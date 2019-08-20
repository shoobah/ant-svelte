<script>
  import Icon from "../components/icon.svelte";
  import * as allIcons from "@ant-design/icons/lib/dist";

  var icons = Object.keys(allIcons)
    .map(key => allIcons[key])
    .filter(e => e.name && e.theme)
    .map(i => ({
      name: i.name,
      theme: i.theme,
      id: i.name + "." + i.theme + "_text",
      html: `<Icon type="${i.name}" theme="${i.theme}" />`
    }))
    .sort((a, b) => {
      var nameComp = a.name.localeCompare(b.name, "en");
      var themeComp = a.theme.localeCompare(b.theme, "en");
      if (themeComp === 0) {
        return nameComp;
      }
      return themeComp;
    });

  function onClick(icon) {
    var text = icon.name + "." + icon.theme + "_text";
    var thing = document.getElementById(text);
    thing.select();
    document.execCommand("copy");
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

<h1>Available icons:</h1>
<div class="wrapper">
  {#each icons as icon}
    <div class="icon-box" on:click={e => onClick(icon)}>
      <Icon type={icon.name} theme={icon.theme} />
      <br />
      <span>{icon.name} - {icon.theme}</span>
      <textarea id={icon.id} readonly>{icon.html}</textarea>
    </div>
  {/each}
</div>
