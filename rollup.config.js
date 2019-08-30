import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: ["src/index.js", "src/second.svelte"],
  output: {
    dir: "module",
    format: "es",
    sourcemap: true
  },
  plugins: [svelte(), resolve()]
};
