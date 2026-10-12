// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    // Replace this with the canonical URL if the live site uses a different domain.
    site: "https://voultsos.com",
    output: "static",
    integrations: [mdx(), sitemap(), react(), keystatic()],
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
});
