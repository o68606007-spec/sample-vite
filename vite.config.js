import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import env from "vite-plugin-env-compatible";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [react(), env({ prefix: "VITE", mountedPath: "import.meta.env" })],
  // base: "",

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
