// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ["what-we-do"]: resolve(__dirname, 'what-we-do.html'),
        ["who-we-are"]: resolve(__dirname, 'who-we-are.html'),
        ["core-services"]: resolve(__dirname, 'core-services.html'),
        ["financial-capabilities"]: resolve(__dirname, 'financial-capabilities.html'),
        ["company-structure"]: resolve(__dirname, 'company-structure.html'),
      },
    },
  },
})