import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// matrixon.org и др.: локально `npm run build` → base '/'.
// GitHub Pages (репозиторий matrixon-website): в CI выставляется VITE_DEPLOY_TARGET=github-pages
const base =
  process.env.VITE_DEPLOY_TARGET === 'github-pages' ? '/matrixon-website/' : '/'

/** Убирает из prod index.html подсказку про деплой исходников (остаётся только в dev-шаблоне). */
function stripDeployHintFromProd(): Plugin {
  return {
    name: 'strip-deploy-hint',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        /<!--deploy-hint-start-->[\s\S]*?<!--deploy-hint-end-->\s*/g,
        '',
      )
    },
  }
}

export default defineConfig({
  plugins: [vue(), stripDeployHintFromProd()],
  base,
})
