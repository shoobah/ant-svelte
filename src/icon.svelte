<script>
  import * as allIcons from "@ant-design/icons/lib/dist";

  export let type = "";
  export let theme = "outline"; // default to outlined
  export let color = "black";
  export let twoToneColor = "#80e8ff";
  export let style = {};
  export let flip = false;

  export let spin = false;
  export let rotate = 0;
  export let tabIndex = -1;
  export let size = "2em";

  // Translatioons goes here 😀
  const locale = {
    icon: "Icon"
  };

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var icons = Object.keys(allIcons).map(key => allIcons[key]);

  $: found = icons.find(e => e.name === type && e.theme === theme);

  var ch = [];
  var d = "";
  var viewBox = "";

  $: if (theme != "twotone") {
    var i = found.icon;
    viewBox = i.attrs.viewBox;
    ch = i.children;
  } else {
    var i = found.icon(color, twoToneColor);
    viewBox = i.attrs.viewBox;
    ch = i.children;
  }

  let iconSpin = spin ? "anticon-spin" : "";
</script>

<style>
  @-webkit-keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .anticon-spin {
    display: inline-block;
    -webkit-animation: loadingCircle 1s infinite linear;
    animation: loadingCircle 1s infinite linear;
  }

  .flip {
    transform: rotate(0.5turn);
  }

  i {
    transition: all 300ms;
  }

  i:focus {
    outline: none;
  }
</style>

<i
  aria-label={type && `${locale.icon}: ${type}`}
  tabIndex={iconTabIndex}
  class="anticon anticon-{type}"
  class:flip
  on:click
  {style}>
  <svg
    {viewBox}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    class={iconSpin}
    version="1.1">
    {#each ch as child}
      <path
        fill={theme === 'twotone' ? child.attrs.fill : color}
        stroke="none"
        stroke-width="1"
        d={child.attrs.d} />
    {/each}
  </svg>
</i>
