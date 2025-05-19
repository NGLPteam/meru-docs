// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import browserslist from "browserslist";
import { resolveToEsbuildTarget } from "esbuild-plugin-browserslist";

const buildTarget = resolveToEsbuildTarget(browserslist());

// https://astro.build/config
export default defineConfig({
  site: "https://docs.meru.host",
  vite: {
    build: {
      target: buildTarget,
    },
  },
  trailingSlash: "never",
  integrations: [
    starlight({
      title: "Meru Docs",
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/global.css",
      ],
      editLink: {
        baseUrl: "https://github.com/NGLPteam/meru-docs/edit/main",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/NGLPteam",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Get Started", slug: "guides/get-started" },
          //   { label: "Example Guide", slug: "guides/example" },
          // ],
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
