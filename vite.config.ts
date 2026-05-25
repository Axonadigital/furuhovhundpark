// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable Cloudflare Workers build target — we deploy as a prerendered static site on Vercel.
  cloudflare: false,
  tanstackStart: {
    pages: [
      { path: "/" },
      { path: "/ostersund" },
      { path: "/as" },
      { path: "/kontakt" },
      { path: "/integritetspolicy" },
      { path: "/sitemap.xml" },
    ],
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
  },
});
