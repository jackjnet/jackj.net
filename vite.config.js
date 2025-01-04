import { defineConfig } from "vite";

export default defineConfig({
  css: {
    postcss: "./postcss.config.js",
  },
  server: {
    watch: {
      additionalWatchFiles: ["./src/output.css"],
    },
  },
});
