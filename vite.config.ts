import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages project URL: https://<user>.github.io/matrixon-website/
const GH_PAGES_BASE = '/matrixon-website/'

export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: command === 'serve' ? '/' : GH_PAGES_BASE,
}))
