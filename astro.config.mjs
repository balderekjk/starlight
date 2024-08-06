import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "/home",
  },
  integrations: [
    starlight({
      title: "NHEA",
      sidebar: [
        {
          label: "Main",
          items: [
            {
              label: "Home",
              slug: "home",
            },
            {
              label: "Annual Convention",
              slug: "annual-convention",
            },
            {
              label: "Register",
              slug: "register",
            },
            {
              label: "About Us",
              slug: "about-us",
            },
          ],
        },
      ],
      components: {
        Head: "./src/components/Head.astro",
        Footer: "./src/components/Footer.astro",
        PageTitle: "./src/components/PageTitle.astro",
      },
      customCss: ["./src/tailwind.css", "@fontsource/figtree"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
