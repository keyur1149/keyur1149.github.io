import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
 plugins: [
    react(),
    {
      name: "copy-index-to-404",
      closeBundle: () => {
        const indexPath = path.resolve(__dirname, "dist/index.html");
        const errorPath = path.resolve(__dirname, "dist/404.html");
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, errorPath);
          console.log("✅ 404.html created for GitHub Pages");
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
