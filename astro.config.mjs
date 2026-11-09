import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.magnetbmw.cz",
  vite: {
    plugins: [tailwindcss()],
  },
});
