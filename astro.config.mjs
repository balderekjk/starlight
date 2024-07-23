import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "NHEA",
      sidebar: [
        {
          label: "Navigation",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "home", slug: "" },
            { label: "annual convention", slug: "annual-convention" },
            { label: "register", slug: "register" },
            { label: "about us", slug: "about-us" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "docs" },
        },
      ],
      customCss: ["./src/tailwind.css"],
      tableOfContents: false,
      pagination: false,
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
