import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, "../assets/three-app"),
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/main.jsx",
      output: {
        entryFileNames: "particlevessel.js"   // 👈 force stable filename
        // entryFileNames: "particlewidget.js"
      }
    }
  }
});
