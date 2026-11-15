// @ts-check
import { defineConfig, fontProviders } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://heyleydotdev.github.io",
  server: { host: "0.0.0.0", port: 3000 },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      weights: [400, 500, 600],
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],
})
