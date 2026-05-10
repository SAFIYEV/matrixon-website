import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// matrixon.org (CNAME на GitHub Pages): сайт в корне домена → base '/'.
// Для публикации только на https://<user>.github.io/<repo>/ задайте VITE_BASE_PATH='/<repo>/'.
const rawBase = process.env.VITE_BASE_PATH?.trim()
const base =
  rawBase && rawBase !== '/'
    ? rawBase.endsWith('/')
      ? rawBase
      : `${rawBase}/`
    : '/'

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
