// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Poppins",
      cssVariable: "--font-poppins",
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600, 700, 800, 900],
      styles: ["normal"],
      subsets: ["latin"],
      display: "swap",
      formats: ["woff2"],
      fallbacks: ["sans-serif"],
    },
  ],
});
