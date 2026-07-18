<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
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
    if (route.name === 'browser') {
      document.title = m.browserMetaTitle
      meta?.setAttribute('content', m.browserMetaDescription)
    } else if (route.name === 'mixa') {
      document.title = m.mixaMetaTitle
      meta?.setAttribute('content', m.mixaMetaDescription)
    } else {
      document.title = m.metaTitle
      meta?.setAttribute('content', m.metaDescription)
    }
  },
  { immediate: true },
)

const menuOpen = ref(false)
const scrolled = ref(false)

const heroHeader = computed(() => route.name === 'home')

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
  <div class="page" :class="{ 'page--deck': route.name === 'home' }">
    <header
      class="header"
      :class="{
        'header--scrolled': scrolled && route.name !== 'home',
        'header--hero': heroHeader,
        'header--deck': route.name === 'home',
      }"
    >
      <div class="header__inner">
        <RouterLink class="brand" to="/" @click="closeMenu">
          <img class="brand__logo" src="/logo-matrixon.png" width="40" height="40" alt="MATRIXON" />
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
          <RouterLink class="nav__link" :to="{ path: '/', hash: '#product' }" @click="closeMenu">
            {{ t.navProduct }}
          </RouterLink>
          <RouterLink class="nav__link" :to="{ path: '/', hash: '#build' }" @click="closeMenu">
            {{ t.navApproach }}
          </RouterLink>
          <RouterLink class="nav__link" :to="{ path: '/', hash: '#partners' }" @click="closeMenu">
            {{ t.navPartners }}
          </RouterLink>
          <RouterLink class="nav__link" :to="{ path: '/', hash: '#team' }" @click="closeMenu">
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
            <a class="btn btn--ghost-dark" :href="`mailto:${mail}`" @click="closeMenu">{{ t.navWrite }}</a>
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

    <footer v-if="route.name !== 'home'" class="footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <img class="footer__logo" src="/logo-matrixon.png" width="36" height="36" alt="MATRIXON" />
          <span class="footer__name">MATRIXON</span>
        </div>
        <div class="footer__cols">
          <div class="footer__cols-leading">
            <div class="footer__col">
              <h3 class="footer__h">{{ t.footerNavH }}</h3>
              <RouterLink :to="{ path: '/', hash: '#product' }">{{ t.footerLinkProduct }}</RouterLink>
              <RouterLink :to="{ path: '/', hash: '#build' }">{{ t.footerLinkApproach }}</RouterLink>
              <RouterLink :to="{ path: '/', hash: '#partners' }">{{ t.footerLinkPartners }}</RouterLink>
              <RouterLink :to="{ path: '/', hash: '#team' }">{{ t.footerLinkFounder }}</RouterLink>
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

.page--deck {
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}

.page--deck .page-shell {
  height: 100%;
}

.header--deck {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  border-bottom-color: transparent;
}

.page {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: clip;
  background: transparent;
}

.page-shell {
  position: relative;
  z-index: 1;
}

.page-crossfade-enter-active,
.page-crossfade-leave-active {
  transition:
    opacity 0.32s var(--ease),
    transform 0.32s var(--ease);
}

.page-crossfade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-crossfade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
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

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--header-h);
  transition:
    background 0.25s ease,
    border-color 0.25s ease;
  border-bottom: 1px solid transparent;
  color: var(--ink);
}

.header--scrolled {
  background: rgba(244, 244, 241, 0.88);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--line);
}

.header__inner {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  color: var(--ink);
  z-index: 2;
  transition: opacity 0.2s ease;
}

.brand:hover {
  opacity: 0.75;
}

.brand__name {
  font-family: var(--font-display);
  letter-spacing: 0.04em;
}

.brand__logo {
  border-radius: 10px;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: transparent;
  cursor: pointer;
  z-index: 2;
}

.nav-toggle__bar {
  display: block;
  height: 1.5px;
  width: 18px;
  margin: 0 auto;
  background: var(--ink);
  border-radius: 2px;
  transition:
    transform 0.28s var(--ease),
    opacity 0.2s ease;
}

.nav-toggle--open .nav-toggle__bar:nth-child(2) {
  transform: translateY(4.25px) rotate(45deg);
}

.nav-toggle--open .nav-toggle__bar:nth-child(3) {
  transform: translateY(-4.25px) rotate(-45deg);
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
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-muted);
  transition: color 0.2s ease;
}

.nav__link:hover {
  color: var(--ink);
}

.lang {
  position: relative;
  display: inline-flex;
  align-items: stretch;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line);
  background: transparent;
  padding: 2px;
  gap: 2px;
}

.lang__pill {
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(50% - 3px);
  height: calc(100% - 4px);
  border-radius: 6px;
  background: rgba(20, 20, 19, 0.06);
  pointer-events: none;
  z-index: 0;
  transition: transform 0.35s var(--ease);
}

.lang__pill--en {
  transform: translateX(calc(100% + 2px));
}

.lang__btn {
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 40px;
  border: none;
  background: transparent;
  font: inherit;
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.06em;
  color: var(--ink-muted);
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.lang__btn:hover {
  color: var(--ink);
}

.lang__btn--active {
  color: var(--ink);
}

.nav__cta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 4px;
}

.footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--line);
  background: var(--paper-deep);
  color: var(--ink);
  padding: 48px 24px 24px;
}

.footer__inner {
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  gap: 32px;
}

@media (min-width: 720px) {
  .footer__inner {
    grid-template-columns: auto minmax(0, 1fr);
    align-items: start;
    column-gap: clamp(48px, 7vw, 88px);
  }
}

.footer__logo {
  display: inline-block;
  border-radius: 10px;
  margin-bottom: 8px;
}

.footer__name {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.06em;
  font-size: 13px;
  margin-bottom: 4px;
}

.footer__cols {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.footer__cols-leading {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

@media (min-width: 640px) {
  .footer__cols-leading {
    flex-direction: row;
    gap: clamp(36px, 5vw, 52px);
  }

  .footer__cols {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: clamp(40px, 6vw, 72px);
  }
}

@media (min-width: 720px) {
  .footer__cols {
    justify-self: end;
    width: max-content;
    max-width: 100%;
  }
}

.footer__h {
  margin: 0 0 12px;
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__col a {
  font-size: 14px;
  color: var(--ink-muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer__col a:hover {
  color: var(--ink);
}

.footer__matrixon-tg {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 550;
  color: var(--ink-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.footer__matrixon-tg:hover {
  color: var(--ink);
}

.footer__matrixon-tg-icon {
  display: flex;
  flex-shrink: 0;
  color: var(--accent);
}

.footer__bottom {
  max-width: var(--max);
  margin: 32px auto 0;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}

.footer__legal {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--ink-faint);
  max-width: 52ch;
}

.footer__copy {
  margin: 0;
  font-size: 12px;
  color: var(--ink-faint);
}

@media (max-width: 1040px) {
  .header__inner {
    padding: 12px 20px;
  }

  .nav {
    gap: 14px;
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
    padding: 84px 24px 28px;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    background: rgba(244, 244, 241, 0.98);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--line);
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
    font-size: 16px;
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
}

@media (max-width: 560px) {
  .header__inner {
    padding: 10px 14px;
  }

  .brand {
    gap: 8px;
    font-size: 13px;
  }

  .brand__logo {
    width: 34px;
    height: 34px;
  }

  .footer {
    padding: 36px 16px 18px;
  }
}
</style>
