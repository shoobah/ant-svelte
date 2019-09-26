<script>
  export let onChange = undefined;
  export let checked = false;
  export let disabled = false;

  const change = () => {
    checked = !disabled ? !checked : checked;
    console.log(
      "%c🖖" + new Date().toLocaleTimeString("se") + " checked:",
      "color:lime",
      checked
    );

    if (onChange && !disabled) {
      onChange();
    }
  };
</script>

<style>
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .ant-checkbox-wrapper {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    display: inline-block;
    line-height: unset;
    cursor: pointer;
  }

  .ant-checkbox {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    position: relative;
    top: -0.09em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: pointer;
  }

  .ant-checkbox-input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }

  .ant-checkbox-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    border-collapse: separate;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .ant-checkbox-checked::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 2px;
    visibility: hidden;
    -webkit-animation: antCheckboxEffect 0.36s ease-in-out;
    animation: antCheckboxEffect 0.36s ease-in-out;
    -webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    content: "";
  }

  .ant-checkbox-checked .ant-checkbox-inner::after {
    position: absolute;
    display: table;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -webkit-transform: rotate(45deg) scale(1) translate(-50%, -50%);
    -ms-transform: rotate(45deg) scale(1) translate(-50%, -50%);
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    opacity: 1;
    -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    content: " ";
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #1890ff;
    border-color: #1890ff;
  }

  .ant-checkbox-disabled {
    cursor: not-allowed;
  }

  .ant-checkbox-disabled .ant-checkbox-input {
    cursor: not-allowed;
  }

  .ant-checkbox-disabled .ant-checkbox-inner {
    background-color: #f5f5f5;
    border-color: #d9d9d9 !important;
  }
</style>

<label class="ant-checkbox-wrapper">
  <span
    class="ant-checkbox"
    class:ant-checkbox-checked={checked}
    class:ant-checkbox-disabled={disabled}>
    <input
      type="checkbox"
      class="ant-checkbox-input"
      value=""
      {checked}
      on:change={change} />
    <span class="ant-checkbox-inner" />
  </span>
  <span>
    <slot />
  </span>
</label>
