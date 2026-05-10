import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Корень сайта (matrixon.org и т.п.). Для GitHub Pages в CI: npm run build -- --base=/matrixon-website/
export default defineConfig({
  plugins: [vue()],
  base: '/',
})
