// https://docs.astro.build/en/guides/configuring-astro/#the-astro-config-file
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";

// TODO: Disabled angular due to errors with tsx files
import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), solidJs(), svelte() /*analogjsangular()*/],
});
