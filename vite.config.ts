import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      babel: {
        configFile: false,
        babelrc: false,
        plugins: [
          [
            "@babel/plugin-proposal-decorators",
            {
              version: "2023-11",
            },
          ],
        ],
      },
    }),
  ],
  server: {
    port: 3031,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://localhost:9091",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "build",
  },
});
