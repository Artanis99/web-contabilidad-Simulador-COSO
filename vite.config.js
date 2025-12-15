import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Permite abrir `dist/index.html` directamente (file://) sin servidor,
  // usando rutas relativas para los assets.
  base: "./",
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [".trycloudflare.com", ".ngrok-free.dev", ".ngrok-free.app"],
  },
  preview: {
    allowedHosts: [".trycloudflare.com", ".ngrok-free.dev", ".ngrok-free.app"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("recharts") || id.includes("/d3-")) return "recharts";
          if (id.includes("react")) return "react-vendor";
          return "vendor";
        },
      },
    },
  },
});
