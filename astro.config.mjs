import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  redirects: { "/": "/home" },
  integrations: [
    starlight({
      title: "NHEA",
      sidebar: [
        {
          label: "Main",
          items: [
            { label: "Home", slug: "home" },
            { label: "Annual Convention", slug: "annual-convention" },
            { label: "Register", slug: "register" },
            { label: "About Us", slug: "about-us" },
          ],
        },
      ],
      components: {
        Footer: "./src/components/Footer.astro",
        PageTitle: "./src/components/PageTitle.astro",
      },
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
