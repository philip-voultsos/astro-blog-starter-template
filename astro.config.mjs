// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    output: "hybrid",
    integrations: [mdx(), sitemap(), react(), keystatic()],
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
});
