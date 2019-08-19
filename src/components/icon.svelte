<script>
  import { AccountBookFill } from "@ant-design/icons";
  import { renderIconDefinitionToSVGElement } from "@ant-design/icons/lib/helpers";
  import * as allIcons from "@ant-design/icons/lib/dist";

  const svgHTMLString = renderIconDefinitionToSVGElement(AccountBookFill, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  });

  export let type = "";
  export let component = undefined;
  export let viewBox = undefined;
  export let spin = false;
  export let rotate = 0;
  export let tabIndex = -1;
  export let onClick = undefined;
  export let children = [];
  export let theme = "outlined"; // default to outlined
  export let twoToneColor = "";
  export let props = {};

  const locale = {
    icon: "Icon"
  };

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var icons = Object.keys(allIcons).map(key => allIcons[key]);
  console.log(icons.find(e => e.name === "eye"));
</script>

<i
  aria-label={type && `${locale.icon}: ${type}`}
  {...props}
  tabIndex={iconTabIndex}
  {onClick}
  class="anticon anticon-{type}">
  {@html svgHTMLString}
</i>
