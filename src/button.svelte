<script>
  import Icon from "./icon.svelte";

  export let value = "";
  export let type = "";
  export let size = "";
  export let shape = "";
  export let icon = "";
  export let onClick = undefined;

  $: iconColor = () => {
    if (type === "primary" || type === "danger") {
      return "#ffffff";
    }
    return "#000000";
  };

  $: classes = () => {
    var theCss = "ant-btn";

    if (type) {
      theCss += " ant-btn-" + type;
    }

    switch (size) {
      case "large":
        theCss += " ant-btn-lg";
        break;
      case "small":
        theCss += " ant-btn-sm";
      default:
        break;
    }

    switch (shape) {
      case "round":
        theCss += " ant-btn-round";
        break;
      case "circle":
        theCss += " ant-btn-circle";
      default:
        break;
    }

    return theCss;
  };
</script>

<style>
  button {
    text-transform: none;
    -webkit-appearance: button;
  }

  .ant-btn,
  .ant-btn:active,
  .ant-btn:focus {
    outline: 0;
  }

  .ant-btn {
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
  }

  .ant-btn-primary {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }

  .ant-btn-dashed {
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
    border-style: dashed;
  }

  .ant-btn-danger {
    color: #fff;
    background-color: #ff4d4f;
    border-color: #ff4d4f;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }

  .ant-btn-link {
    color: #1890ff;
    background-color: transparent;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ant-btn-lg {
    height: 40px;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
  }

  .ant-btn-sm {
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 4px;
  }

  .ant-btn-icon-only {
    width: 32px;
    height: 32px;
    padding: 0;
    font-size: 16px;
    border-radius: 4px;
  }
  .ant-btn-round.ant-btn-sm {
    height: 24px;
    padding: 0 12px;
    font-size: 14px;
    border-radius: 24px;
  }
  .ant-btn-round {
    height: 32px;
    padding: 0 16px;
    font-size: 16px;
    border-radius: 32px;
  }

  .ant-btn-circle,
  .ant-btn-circle-outline {
    min-width: 32px;
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    border-radius: 50%;
  }

  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active,
  .ant-btn.active {
    text-decoration: none;
    background: #fff;
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
  }

  .ant-btn:hover,
  .ant-btn:focus {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff;
  }

  .ant-btn:not([disabled]):hover {
    text-decoration: none;
  }

  .ant-btn-danger:hover,
  .ant-btn-danger:focus {
    color: #fff;
    background-color: #ff7875;
    border-color: #ff7875;
  }
</style>

<button on:click={onClick} class={classes()} type="button">
  {#if icon}
    <Icon
      type={icon}
      size="14px"
      style="vertical-align: -0.125em; user-select: none"
      color={iconColor()} />
  {/if}
  <slot />
</button>
