import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

import sitemap from 'astro-sitemap';

// https://astro.build/config
export default defineConfig({
	site: "https://mod-magazine.github.io",
	integrations: [tailwind(), robotsTxt(), sitemap()]
});
