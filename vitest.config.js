import { defineConfig } from 'vitest/config'
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  test: {
    globals: true,
    watch: false,
    // solid needs to be inline to work around
    // a resolution issue in vitest
    // And solid-testing-library needs to be here so that the 'hydrate'
    // method will be provided
    deps: {
      inline: [/solid-js/, /solid-testing-library/],
    },
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
