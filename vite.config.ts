import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path, { resolve } from "path";

const root = resolve(__dirname, "src");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "assets": path.resolve(root, "assets"),
      "constants": path.resolve(root, "constants"),
      "components": path.resolve(root, "components"),
      "layouts": path.resolve(root, "layouts"),
      "routes": path.resolve(root, "routes"),
      "views": path.resolve(root, "views"),
    },
  },
});
