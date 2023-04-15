import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";

import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), solidJs(), svelte(), analogjsangular()]
});