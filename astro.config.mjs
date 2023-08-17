import { defineConfig } from "astro/config";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://gummientchen.net/",
  base: "/",
  experimental: {
    viewTransitions: true,
  },
  integrations: [compress()],
});
