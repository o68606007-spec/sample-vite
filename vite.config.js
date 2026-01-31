import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     // バンドルから除外するモジュールを指定
  //     external: ["styled-components"],
  //     output: {
  //       globals: {
  //         // UMD / IIFE ビルド時にグローバル変数名を指定
  //         "styled-components": "styled",
  //       },
  //     },
  //   },
  // },
});
