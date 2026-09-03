// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bitdoze.ro",
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        // Doar pentru dev local (permite servirea fișierelor din afara root).
        // Nu copiați în config de preview/prod.
        strict: false,
      },
    },
  },

  integrations: [mdx(), icon()],
});
