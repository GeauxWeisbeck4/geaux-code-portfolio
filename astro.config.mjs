// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://geauxweisbeck4.dev',
    integrations: [mdx(), sitemap(), icon()],
    i18n: {
        defaultLocale: "en",
        locales: ["en", "es"]
    },
});
