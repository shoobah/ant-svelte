<script>
  import * as allIcons from "@ant-design/icons/lib/dist";

  export let type = "";
  export let theme = "outline"; // default to outlined
  export let color = "black";
  export let twoToneColor = "#80e8ff";

  export let spin = false;
  export let rotate = 0;
  export let tabIndex = -1;
  export let size = "2em";
  export let props = {};

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
</script>

<i
  aria-label={type && `${locale.icon}: ${type}`}
  {...props}
  tabIndex={iconTabIndex}
  class="anticon anticon-{type}">
  <svg
    {viewBox}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
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
