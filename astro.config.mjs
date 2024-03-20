import { defineConfig } from "astro/config";
import compress from "astro-compress";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://gummientchen.net/",
  base: "/",
  integrations: [compress({
    Image: false
  }), icon()]
});