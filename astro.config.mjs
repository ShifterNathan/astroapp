import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tourmaline-empanada-297c47.netlify.app/",
  integrations: [preact()]
});