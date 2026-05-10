<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterView, RouterLink } from 'vue-router'
import { useSiteLocale } from './composables/useSiteLocale'
import { messages } from './i18n'
import SocialIcon from './components/SocialIcon.vue'

const route = useRoute()
const { locale, t, setLocale } = useSiteLocale()

watch(
  [() => route.name, locale],
  () => {
    const m = messages[locale.value]
    const meta = document.querySelector('meta[name="description"]')
    if (route.name === 'colearn') {
      document.title = m.colearnMetaTitle
      meta?.setAttribute('content', m.colearnMetaDescription)
    } else {
      document.title = m.metaTitle
      meta?.setAttribute('content', m.metaDescription)
    }
  },
  { immediate: true },
)

const menuOpen = ref(false)
const scrolled = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const mail = 'info@matrixon.org'
const phoneDisplay = '+994 (010) 736 57 73'
const phoneHref = 'tel:+994107365773'
const whatsappHref = 'https://wa.me/994107365773'
const matrixonTelegramHref = 'https://t.me/matrixonAI'
</script>

<template>
  <div class="page">
    <div class="mesh mesh--bg" aria-hidden="true" />

    <header class="header" :class="{ 'header--scrolled': scrolled }">
      <div class="header__inner">
        <RouterLink class="brand" to="/" @click="closeMenu">
          <img class="brand__logo" src="/logo-matrixon.png" width="44" height="44" alt="MATRIXON" />
          <span class="brand__name">MATRIXON</span>
        </RouterLink>

        <button
          type="button"
          class="nav-toggle"
          :class="{ 'nav-toggle--open': menuOpen }"
          :aria-expanded="menuOpen"
          aria-controls="site-nav"
          @click="toggleMenu"
        >
          <span class="sr-only">{{ t.menuAria }}</span>
          <span class="nav-toggle__bar" />
          <span class="nav-toggle__bar" />
        </button>

        <nav id="site-nav" class="nav" :class="{ 'nav--open': menuOpen }">
          <RouterLink class="nav__link" :to="{ path: '/', hash: '#vectors' }" @click="closeMenu">
            {{ t.navVectors }}
          </RouterLink>
          <RouterLink class="nav__link" to="/colearn" @click="closeMenu">
            {{ t.navProducts }}
          </RouterLink>
          <RouterLink class="nav__link" :to="{ path: '/', hash: '#founder' }" @click="closeMenu">
            {{ t.navFounder }}
          </RouterLink>
          <RouterLink class="nav__link" :to="{ path: '/', hash: '#contact' }" @click="closeMenu">
            {{ t.navContact }}
          </RouterLink>
          <div class="lang" role="group" :aria-label="t.langSwitcherAria">
            <span class="lang__pill" :class="{ 'lang__pill--en': locale === 'en' }" aria-hidden="true" />
            <button
              type="button"
              class="lang__btn"
              :class="{ 'lang__btn--active': locale === 'ru' }"
              :aria-pressed="locale === 'ru'"
              @click="setLocale('ru'); closeMenu()"
            >
              {{ t.langRu }}
            </button>
            <button
              type="button"
              class="lang__btn"
              :class="{ 'lang__btn--active': locale === 'en' }"
              :aria-pressed="locale === 'en'"
              @click="setLocale('en'); closeMenu()"
            >
              {{ t.langEn }}
            </button>
          </div>
          <div class="nav__cta">
            <a class="btn btn--ghost" :href="`mailto:${mail}`" @click="closeMenu">{{ t.navWrite }}</a>
            <a class="btn btn--primary" :href="phoneHref" @click="closeMenu">{{ t.navCall }}</a>
          </div>
        </nav>
      </div>
    </header>

    <Transition name="page-crossfade" mode="out-in" appear>
      <div :key="`${route.path}-${locale}`" class="page-shell">
        <RouterView />
      </div>
    </Transition>

    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <img class="footer__logo" src="/logo-matrixon.png" width="40" height="40" alt="MATRIXON" />
          <span class="footer__name">MATRIXON</span>
        </div>
        <div class="footer__cols">
          <div class="footer__cols-leading">
            <div class="footer__col">
              <h3 class="footer__h">{{ t.footerNavH }}</h3>
              <RouterLink :to="{ path: '/', hash: '#vectors' }">{{ t.footerLinkVectors }}</RouterLink>
              <RouterLink to="/colearn">{{ t.footerLinkProducts }}</RouterLink>
              <RouterLink :to="{ path: '/', hash: '#founder' }">{{ t.footerLinkFounder }}</RouterLink>
            </div>
            <div class="footer__col">
              <h3 class="footer__h">{{ t.footerMediaH }}</h3>
              <a
                class="footer__matrixon-tg"
                :href="matrixonTelegramHref"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="footer__matrixon-tg-icon" aria-hidden="true">
                  <SocialIcon network="telegram" />
                </span>
                <span class="footer__matrixon-tg-label">{{ t.footerTelegramMatrixon }}</span>
              </a>
            </div>
          </div>
          <div class="footer__col">
            <h3 class="footer__h">{{ t.footerCompanyH }}</h3>
            <RouterLink :to="{ path: '/', hash: '#contact' }">{{ t.footerContact }}</RouterLink>
            <a :href="`mailto:${mail}`">{{ mail }}</a>
            <a :href="phoneHref">{{ phoneDisplay }}</a>
            <a :href="whatsappHref" target="_blank" rel="noopener noreferrer">{{ t.footerWhatsApp }}</a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__legal">{{ t.founderLegal }}</p>
        <p class="footer__copy">© {{ new Date().getFullYear() }} MATRIXON</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.page {
  position: relative;
  min-height: 100vh;
  overflow-x: clip;
}

.page-shell {
  position: relative;
  z-index: 1;
}

.page-crossfade-enter-active,
.page-crossfade-leave-active {
  transition:
    opacity 0.38s cubic-bezier(0.33, 1, 0.68, 1),
    transform 0.38s cubic-bezier(0.33, 1, 0.68, 1);
}

.page-crossfade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-crossfade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .page-crossfade-enter-active,
  .page-crossfade-leave-active {
    transition-duration: 0.01ms;
  }

  .page-crossfade-enter-from,
  .page-crossfade-leave-to {
    transform: none;
  }
}

.mesh {
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0.45;
  background-image:
    radial-gradient(circle at 18% 22%, rgba(26, 74, 158, 0.14) 0, transparent 42%),
    radial-gradient(circle at 82% 8%, rgba(60, 192, 180, 0.12) 0, transparent 38%),
    linear-gradient(120deg, rgba(42, 142, 181, 0.06) 0%, transparent 55%);
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 20%, transparent 75%);
}

.mesh--bg {
  position: fixed;
  z-index: 0;
  opacity: 0.35;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  transition:
    background 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  border-bottom: 1px solid transparent;
}

.header--scrolled {
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(14px);
  border-bottom-color: var(--border);
  box-shadow: 0 8px 32px rgba(15, 23, 42, 0.06);
}

.header__inner {
  max-width: var(--max);
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: 0.06em;
  font-size: 15px;
  color: var(--text);
  z-index: 2;
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.brand:hover {
  transform: translateY(-1px);
  opacity: 0.92;
}

.brand:active {
  transform: translateY(0);
}

.brand__logo {
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(26, 74, 158, 0.15);
  transition:
    box-shadow 0.28s ease,
    transform 0.28s ease;
}

.brand:hover .brand__logo {
  box-shadow: 0 12px 32px rgba(26, 74, 158, 0.22);
  transform: scale(1.04);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
  width: 44px;
  height: 44px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  z-index: 2;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.nav-toggle:hover {
  border-color: rgba(26, 74, 158, 0.25);
  box-shadow: 0 4px 14px rgba(26, 74, 158, 0.08);
}

.nav-toggle__bar {
  display: block;
  height: 2px;
  width: 20px;
  margin: 0 auto;
  background: var(--text);
  border-radius: 2px;
  transition:
    transform 0.32s cubic-bezier(0.34, 1.3, 0.64, 1),
    opacity 0.22s ease;
}

.nav-toggle--open .nav-toggle__bar:nth-child(2) {
  transform: translateY(4.5px) rotate(45deg);
}

.nav-toggle--open .nav-toggle__bar:nth-child(3) {
  transform: translateY(-4.5px) rotate(-45deg);
}

@media (prefers-reduced-motion: reduce) {
  .nav-toggle--open .nav-toggle__bar:nth-child(2),
  .nav-toggle--open .nav-toggle__bar:nth-child(3) {
    transform: none;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav__link {
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-muted);
  position: relative;
  transition:
    color 0.25s ease,
    transform 0.2s ease;
}

.nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--m-navy), var(--m-teal));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.28s cubic-bezier(0.34, 1.3, 0.64, 1);
  opacity: 0.85;
}

.nav__link:hover {
  color: var(--m-navy);
}

.nav__link:hover::after {
  transform: scaleX(1);
}

.nav__link--active {
  color: var(--m-navy);
  font-weight: 600;
}

.lang {
  position: relative;
  display: inline-flex;
  align-items: stretch;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.9);
  padding: 3px;
  gap: 2px;
}

.lang__pill {
  position: absolute;
  top: 3px;
  left: 3px;
  width: calc(50% - 4px);
  height: calc(100% - 6px);
  border-radius: var(--radius-pill);
  background: var(--surface-soft);
  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08);
  pointer-events: none;
  z-index: 0;
  transition: transform 0.42s cubic-bezier(0.34, 1.25, 0.64, 1);
  will-change: transform;
}

.lang__pill--en {
  transform: translateX(calc(100% + 2px));
}

.lang__btn {
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 44px;
  border: none;
  background: transparent;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  padding: 7px 12px;
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition:
    color 0.28s ease,
    transform 0.22s ease;
}

.lang__btn:hover {
  color: var(--m-navy);
}

.lang__btn:active {
  transform: scale(0.96);
}

.lang__btn--active {
  color: var(--m-navy);
}

@media (prefers-reduced-motion: reduce) {
  .lang__pill {
    transition-duration: 0.15s;
  }

  .lang__btn:active {
    transform: none;
  }
}

.nav__cta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 4px;
}

.footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--border);
  background: #fff;
  padding: 48px 24px 24px;
}

.footer__inner {
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  gap: 36px;
}

@media (min-width: 720px) {
  .footer__inner {
    grid-template-columns: auto minmax(0, 1fr);
    align-items: start;
    column-gap: clamp(56px, 8vw, 96px);
  }
}

.footer__brand {
  max-width: 280px;
}

.footer__logo {
  display: inline-block;
  border-radius: 12px;
  margin-bottom: 10px;
}

.footer__name {
  display: block;
  font-weight: 800;
  letter-spacing: 0.08em;
  font-size: 14px;
  margin-bottom: 8px;
}

.footer__cols {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 28px;
}

.footer__cols-leading {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
}

@media (min-width: 640px) {
  .footer__cols-leading {
    flex-direction: row;
    align-items: flex-start;
    gap: clamp(40px, 5vw, 56px);
  }

  .footer__cols {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-start;
    /* Больше воздуха до Company — Sections и Media чуть левее */
    gap: clamp(48px, 7vw, 80px);
  }
}

/* Рядом с логотипом: блок колонок у правого края */
@media (min-width: 720px) {
  .footer__cols {
    justify-self: end;
    width: max-content;
    max-width: 100%;
    margin-left: 0;
  }
}

.footer__h {
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (min-width: 640px) {
  .footer__cols-leading > .footer__col:first-child {
    margin-left: -8px;
  }
}

.footer__col a {
  font-size: 15px;
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  transition:
    color 0.22s ease,
    transform 0.22s ease;
}

.footer__col a:hover {
  color: var(--m-navy);
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .footer__col a:hover {
    transform: none;
  }

  .brand:hover,
  .brand:hover .brand__logo {
    transform: none;
  }

  .nav__link::after {
    transition: none;
  }
}

.footer__matrixon-tg {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  margin-top: 2px;
  max-width: 100%;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--surface-soft);
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  transition:
    border-color 0.2s,
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s;
}

.footer__matrixon-tg:hover {
  border-color: rgba(26, 74, 158, 0.28);
  background: #fff;
  color: var(--m-navy);
  box-shadow: 0 8px 24px rgba(26, 74, 158, 0.08);
}

.footer__matrixon-tg-icon {
  display: flex;
  flex-shrink: 0;
  color: var(--m-blue);
}

.footer__matrixon-tg-label {
  line-height: 1.3;
}

.footer__bottom {
  max-width: var(--max);
  margin: 36px auto 0;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.footer__legal {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  color: var(--text-muted);
  max-width: 52ch;
}

.footer__copy {
  margin: 0;
  font-size: 13px;
  color: var(--text-muted);
}

@media (max-width: 1040px) {
  .header__inner {
    padding: 12px 20px;
    gap: 14px;
  }

  .nav {
    gap: 14px;
  }

  .footer {
    padding: 40px 20px 22px;
  }

  .footer__inner {
    gap: 28px;
  }
}

@media (max-width: 860px) {
  .nav-toggle {
    display: inline-flex;
  }

  .nav {
    position: fixed;
    inset: 0 0 auto;
    top: 0;
    padding: 88px 24px 28px;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition:
      transform 0.28s ease,
      opacity 0.2s ease,
      visibility 0.2s;
  }

  .nav--open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav__link {
    padding: 12px 4px;
    font-size: 17px;
  }

  .lang {
    justify-content: center;
    margin-top: 8px;
  }

  .nav__cta {
    margin-left: 0;
    margin-top: 12px;
    flex-direction: column;
  }

  .nav__cta .btn {
    width: 100%;
  }

  .footer__cols,
  .footer__cols-leading {
    width: 100%;
  }

  .footer__col {
    width: 100%;
  }

  .footer__matrixon-tg {
    width: fit-content;
  }
}

@media (max-width: 560px) {
  .header__inner {
    padding: 10px 14px;
    gap: 10px;
  }

  .brand {
    gap: 8px;
    font-size: 13px;
    letter-spacing: 0.04em;
  }

  .brand__logo {
    width: 36px;
    height: 36px;
    border-radius: 10px;
  }

  .nav {
    padding: 80px 16px 20px;
  }

  .footer {
    padding: 34px 14px 18px;
  }

  .footer__h {
    margin-bottom: 10px;
    font-size: 12px;
  }

  .footer__col a,
  .footer__matrixon-tg {
    font-size: 14px;
  }

  .footer__bottom {
    margin-top: 28px;
    padding-top: 16px;
    gap: 8px;
  }

  .footer__legal,
  .footer__copy {
    font-size: 12px;
  }
}
</style>
