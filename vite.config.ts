import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dir = path.dirname(filename); // Avoid redeclaring 'dirname'

export default defineConfig({
  base: "/Ethereal/", // GitHub Pages base path
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(dir, "client", "src"),
      "@shared": path.resolve(dir, "shared"),
    },
  },
  root: path.resolve(dir, "client"),
  build: {
    outDir: path.resolve(dir, "dist/public"),
    emptyOutDir: true,
  },
});