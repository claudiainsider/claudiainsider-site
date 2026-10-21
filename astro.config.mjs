import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = 'https://claudiainsider.com';

// Hand-built pages in public/ aren't Astro routes, so list them for the sitemap.
// Leave out noindex / thank-you / coming-soon pages.
const staticPages = [
    '/buyer-guide/',
    '/seller-guide/',
    '/tics/',
    '/tics/guide/',
    '/tics/cheat-sheet/',
    '/collab/',
    '/newsletter/',
    '/newsletter/august-2026/',
    '/newsletter/september-2026/',
].map((p) => site + p);

export default defineConfig({
    site,
    output: 'static',
    integrations: [
        sitemap({
            customPages: staticPages,
            filter: (page) => !page.endsWith('/contact/'),
        }),
    ],
});
