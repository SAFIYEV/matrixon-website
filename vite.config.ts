import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// matrixon.org и др.: локально `npm run build` → base '/'.
// GitHub Pages (репозиторий matrixon-website): в CI выставляется VITE_DEPLOY_TARGET=github-pages
const base =
  process.env.VITE_DEPLOY_TARGET === 'github-pages' ? '/matrixon-website/' : '/'

export default defineConfig({
  plugins: [vue()],
  base,
})
