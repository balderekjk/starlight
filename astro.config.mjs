import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

export const MAIN_NAV = [
  { label: "home", slug: "home" },
  { label: "annual convention", slug: "annual-convention" },
  { label: "register", slug: "register" },
  { label: "about us", slug: "about-us" },
];

// https://astro.build/config
export default defineConfig({
  redirects: { "/": "/home" },
  integrations: [
    starlight({
      title: "NHEA",
      sidebar: [
        {
          label: "Navigation",
          items: MAIN_NAV,
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/tailwind.css"],
      components: {
        Header: "./src/components/Header.astro",
      },
      tableOfContents: false,
      pagination: false,
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
