<script>
  import { AccountBookFill } from "@ant-design/icons";
  import { renderIconDefinitionToSVGElement } from "@ant-design/icons/lib/helpers";
  import * as allIcons from "@ant-design/icons/lib/dist";

  const svgHTMLString = renderIconDefinitionToSVGElement(AccountBookFill, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  });

  export let type = "";
  export let component = undefined;
  export let spin = false;
  export let rotate = 0;
  export let tabIndex = -1;
  export let onClick = undefined;
  export let theme = "outline"; // default to outlined
  export let twoToneColor = "";
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
  var found = icons.find(e => e.name === type && e.theme === theme);
  var d = found.icon.children[0] ? found.icon.children[0].attrs.d : "";
  var viewBox = found.icon.attrs.viewBox;
</script>

<i
  aria-label={type && `${locale.icon}: ${type}`}
  {...props}
  tabIndex={iconTabIndex}
  {onClick}
  class="anticon anticon-{type}">
  <svg
    {viewBox}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    version="1.1">
    <path fill="black" stroke="none" stroke-width="1" {d} />
  </svg>
</i>
