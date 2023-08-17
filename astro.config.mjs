import { defineConfig } from "astro/config";

import compress from "astro-compress";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://gummientchen.net/",
  base: "/",
  experimental: {
    viewTransitions: true,
  },
  integrations: [
    image(),
    compress({
      Image: false,
    }),
  ],
});
