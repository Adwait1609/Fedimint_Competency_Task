import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await' // Optional

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Fedimint_Competency_Task/', // Set the base path to match your repo name

  plugins: [
    wasm(),
    topLevelAwait(), // Optional
  ],

  worker: {
    format: 'es',
    plugins: () => [
      wasm(),
      topLevelAwait(), // Optional
    ],
  },

  optimizeDeps: {
    exclude: ['@fedimint/core-web'],
  },
})
