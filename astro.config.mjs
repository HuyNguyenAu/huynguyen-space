import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://huynguyen.space',
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare()
});