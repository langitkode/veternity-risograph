// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 'static' = pre-rendered HTML — ideal for landing pages.
  // Zero JS by default, deploy dist/ folder to Cloudflare Pages.
  output: 'static',

  // Site URL for SEO canonical links
  site: 'https://veternity-beraksi.pages.dev',
});

