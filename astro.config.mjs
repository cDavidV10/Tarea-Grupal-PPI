// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://carmeetingsv.sistemaues.me/",

  vite: {
    build: {
      cssMinify: "esbuild",
    },
  },

  integrations: [sitemap()],
});