<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useSiteLocale } from '../composables/useSiteLocale'
import { useFullPageSlides } from '../composables/useFullPageSlides'
import SocialIcon from '../components/SocialIcon.vue'

const deckRef = ref<HTMLElement | null>(null)
const SLIDE_COUNT = 6
const { activeSlide, scrollToSlide } = useFullPageSlides(deckRef, SLIDE_COUNT)

const { t } = useSiteLocale()

const mail = 'info@matrixon.org'
const phoneHref = 'tel:+994107365773'
const linkWeb3Frens = 'https://t.me/web3frensCA'
const matrixonTelegramHref = 'https://t.me/matrixonAI'
const matrixonInstagramHref = 'https://www.instagram.com/realmatrixon/'

const maratLinks = [
  { href: 'https://www.linkedin.com/in/safiyevmarat/', labelKey: 'socialLinkedIn' as const, network: 'linkedin' as const },
  { href: 'https://t.me/SafiyevToday', labelKey: 'socialTelegram' as const, network: 'telegram' as const },
  { href: 'https://x.com/SafiyevMarat', labelKey: 'socialX' as const, network: 'x' as const },
  { href: 'https://www.instagram.com/maratsafiyev19/', labelKey: 'socialInstagram' as const, network: 'instagram' as const },
  { href: 'https://www.youtube.com/@SafiyevMarat', labelKey: 'socialYoutube' as const, network: 'youtube' as const },
]

const heroWords = computed(() => t.value.heroWords)
const buildPillars = computed(() => [
  { num: '01', title: t.value.panelStability, text: t.value.panelStabilityVal },
  { num: '02', title: t.value.panelDelivery, text: t.value.panelDeliveryVal },
  { num: '03', title: t.value.panelDocs, text: t.value.panelDocsVal },
])

const products = computed(() => [
  {
    num: '01',
    name: t.value.productHeyAgentName,
    text: t.value.productHeyAgentText,
    cta: t.value.productHeyAgentCta,
    href: 'https://github.com/SAFIYEV/HeyAgent',
    external: true,
    cover: null as string | null,
  },
  {
    num: '02',
    name: t.value.productBrowserName,
    text: t.value.productBrowserText,
    cta: t.value.productBrowserCta,
    to: '/browser',
    external: false,
    cover: null as string | null,
  },
  {
    num: '03',
    name: t.value.productMixaName,
    text: t.value.productMixaText,
    cta: t.value.productMixaCta,
    to: '/mixa',
    external: false,
    cover: null as string | null,
  },
  {
    num: '04',
    name: t.value.productWeb3FrenName,
    text: t.value.productWeb3FrenText,
    cta: t.value.productWeb3FrenCta,
    to: '/web3-fren',
    external: false,
    cover: null as string | null,
  },
])

const slideLabels = computed(() => [
  t.value.slideNavIntro,
  t.value.slideNavProduct,
  t.value.slideNavBuild,
  t.value.slideNavPartners,
  t.value.slideNavTeam,
  t.value.slideNavContact,
])
</script>

<template>
  <div class="deck-wrap">
    <nav class="deck-nav" aria-label="Slides">
      <button
        v-for="(_, i) in SLIDE_COUNT"
        :key="i"
        type="button"
        class="deck-nav__dot"
        :class="{ 'deck-nav__dot--active': activeSlide === i }"
        :aria-label="slideLabels[i]"
        :aria-current="activeSlide === i ? 'step' : undefined"
        @click="scrollToSlide(i)"
      >
        <span class="deck-nav__num">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="deck-nav__bar" />
      </button>
    </nav>

    <main ref="deckRef" class="deck">
      <section id="intro" class="slide slide--hero" data-slide="0" aria-label="MATRIXON">
        <div class="slide__atmosphere" aria-hidden="true" />
        <div class="slide__content slide__content--hero">
          <p class="slide__eyebrow">{{ t.heroEyebrow }}</p>
          <h1 class="hero-title">
            <span class="hero-title__brand">MATRIXON</span>
            <span class="hero-title__rotator" aria-live="polite">
              <span
                v-for="(word, i) in heroWords"
                :key="word"
                class="hero-title__word"
                :style="{ '--i': i, '--total': heroWords.length }"
              >{{ word }}</span>
            </span>
          </h1>
          <p class="hero-pitch">{{ t.heroPitch }}</p>
          <div class="hero-actions">
            <button type="button" class="btn btn--primary btn--lg" @click="scrollToSlide(1)">
              {{ t.heroCtaExplore }}
            </button>
            <a class="btn btn--outline btn--lg" :href="`mailto:${mail}`">{{ t.heroCtaContact }}</a>
          </div>
        </div>
        <button type="button" class="slide-scroll-hint" aria-label="Next" @click="scrollToSlide(1)">
          <span class="slide-scroll-hint__line" />
        </button>
      </section>

      <section id="product" class="slide" data-slide="1" aria-labelledby="product-title">
        <div class="slide__content">
          <header class="slide__head">
            <p class="slide__index">01</p>
            <h2 id="product-title" class="slide__title">{{ t.productsTitle }}</h2>
            <p class="slide__lead">{{ t.productsLead }}</p>
          </header>
          <ul class="product-list">
            <li v-for="item in products" :key="item.num" class="product-row" :class="{ 'product-row--cover': item.cover }">
              <span class="product-row__num">{{ item.num }}</span>
              <div class="product-row__body">
                <h3 class="product-row__name">{{ item.name }}</h3>
                <p class="product-row__text">{{ item.text }}</p>
                <figure v-if="item.cover" class="product-row__cover">
                  <img
                    :src="item.cover"
                    :alt="item.name"
                    width="1200"
                    height="630"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
              <RouterLink
                v-if="!item.external && item.to"
                class="product-row__cta"
                :to="item.to"
              >
                {{ item.cta }}
                <span aria-hidden="true">→</span>
              </RouterLink>
              <a
                v-else
                class="product-row__cta"
                :href="item.href"
                :target="item.href?.startsWith('http') ? '_blank' : undefined"
                :rel="item.href?.startsWith('http') ? 'noopener noreferrer' : undefined"
              >
                {{ item.cta }}
                <span aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="build" class="slide" data-slide="2" aria-labelledby="build-title">
        <div class="slide__content slide__content--center">
          <p class="slide__index">02</p>
          <h2 id="build-title" class="slide__title">{{ t.qualityTitle }}</h2>
          <p class="slide__lead">{{ t.qualityLead }}</p>
          <div class="pillar-grid">
            <article v-for="item in buildPillars" :key="item.num" class="pillar">
              <span class="pillar__num">{{ item.num }}</span>
              <h3 class="pillar__title">{{ item.title }}</h3>
              <p class="pillar__text">{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="partners" class="slide" data-slide="3" aria-labelledby="partners-title">
        <div class="slide__content slide__content--center">
          <p class="slide__index">03</p>
          <h2 id="partners-title" class="slide__title">{{ t.partnersTitle }}</h2>
          <p class="slide__lead">{{ t.partnersLead }}</p>
          <a
            class="partner"
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="t.partnerAwsName"
          >
            <img class="partner__logo" src="/partners/aws.svg" width="140" height="84" alt="" />
            <h3 class="partner__name">{{ t.partnerAwsName }}</h3>
            <p class="partner__text">{{ t.partnerAwsText }}</p>
          </a>
        </div>
      </section>

      <section id="team" class="slide" data-slide="4" aria-labelledby="team-title">
        <div class="slide__content slide__content--team">
          <div class="slide__head">
            <p class="slide__index">04</p>
            <h2 id="team-title" class="slide__title">{{ t.teamSectionTitle }}</h2>
            <p class="slide__lead">{{ t.teamSectionLead }}</p>
          </div>
          <article class="team-person" aria-labelledby="person-marat">
            <div class="team-person__photo">
              <img
                src="/founders/marat.png"
                width="480"
                height="480"
                loading="lazy"
                decoding="async"
                :alt="t.founderMaratName"
              />
            </div>
            <div class="team-person__body">
              <p class="team-person__role">{{ t.founderMaratBadge }}</p>
              <h3 id="person-marat" class="team-person__name">{{ t.founderMaratName }}</h3>
              <p class="team-person__bio">{{ t.founderMaratP1 }}</p>
              <p class="team-person__bio">
                {{ t.founderMaratWeb3Lead }}
                <a :href="linkWeb3Frens" target="_blank" rel="noopener noreferrer">{{ t.founderWeb3MediaName }}</a>.
              </p>
              <p class="team-person__bio">{{ t.founderMaratActivities }}</p>
              <div class="team-person__social">
                <a
                  v-for="item in maratLinks"
                  :key="item.labelKey"
                  class="team-social"
                  :href="item.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="t[item.labelKey]"
                >
                  <SocialIcon :network="item.network" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="slide" data-slide="5" aria-labelledby="contact-title">
        <div class="slide__content slide__content--contact">
          <p class="slide__index">05</p>
          <h2 id="contact-title" class="slide__title">{{ t.ctaTitle }}</h2>
          <p class="slide__lead">{{ t.ctaText }}</p>
          <div class="contact-actions">
            <a class="btn btn--primary btn--lg" :href="`mailto:${mail}`">{{ t.ctaEmail }}</a>
            <a class="btn btn--outline btn--lg" :href="phoneHref">{{ t.ctaPhone }}</a>
          </div>
          <footer class="deck-footer">
            <p class="deck-footer__legal">{{ t.founderLegal }}</p>
            <div class="deck-footer__links">
              <a :href="matrixonTelegramHref" target="_blank" rel="noopener noreferrer">
                <SocialIcon network="telegram" />
                {{ t.footerTelegramMatrixon }}
              </a>
              <a :href="matrixonInstagramHref" target="_blank" rel="noopener noreferrer">
                <SocialIcon network="instagram" />
                {{ t.footerInstagramMatrixon }}
              </a>
              <a :href="`mailto:${mail}`">{{ mail }}</a>
            </div>
            <p class="deck-footer__copy">© {{ new Date().getFullYear() }} MATRIXON</p>
          </footer>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.deck-wrap {
  position: relative;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}

.deck {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.deck::-webkit-scrollbar {
  display: none;
}

.deck-nav {
  position: fixed;
  right: clamp(16px, 3vw, 36px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 8px;
}

.deck-nav__dot {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--ink-faint);
  transition: color 0.25s ease;
}

.deck-nav__dot--active {
  color: var(--ink);
}

.deck-nav__num {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  opacity: 0;
  transform: translateX(6px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.deck-nav__dot--active .deck-nav__num,
.deck-nav__dot:hover .deck-nav__num {
  opacity: 1;
  transform: translateX(0);
}

.deck-nav__bar {
  display: block;
  width: 2px;
  height: 22px;
  border-radius: 2px;
  background: currentColor;
  opacity: 0.35;
  transition:
    height 0.3s var(--ease),
    opacity 0.25s ease;
}

.deck-nav__dot--active .deck-nav__bar {
  height: 40px;
  opacity: 1;
  background: var(--ink);
}

.slide {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--header-h) + 28px) clamp(20px, 5vw, 64px) 48px;
  overflow: hidden;
}

.slide__atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 70% 50% at 15% 20%, rgba(26, 61, 122, 0.09), transparent 60%),
    radial-gradient(ellipse 50% 40% at 85% 70%, rgba(20, 20, 19, 0.04), transparent 55%);
}

.slide__content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: var(--max);
}

.slide__content--hero {
  text-align: left;
}

.slide__content--center {
  text-align: center;
}

.slide__content--team {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.slide__content--contact {
  text-align: center;
}

.slide__eyebrow {
  margin: 0 0 18px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.slide__index {
  margin: 0 0 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: var(--ink-faint);
}

.slide__head {
  max-width: 540px;
  margin-bottom: 36px;
}

.slide__content--center .slide__head {
  margin-inline: auto;
}

.hero-title {
  margin: 0 0 22px;
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 0.95;
}

.hero-title__brand {
  font-family: var(--font-display);
  font-size: clamp(3.4rem, 13vw, 8.5rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  text-transform: uppercase;
  color: var(--ink);
  animation: brand-in 0.9s var(--ease) both;
}

.hero-title__rotator {
  position: relative;
  display: block;
  height: clamp(2.6rem, 9vw, 5.8rem);
  overflow: hidden;
  margin-top: 2px;
}

.hero-title__word {
  position: absolute;
  left: 0;
  top: 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 7.5vw, 4.8rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  text-transform: lowercase;
  color: var(--ink-muted);
  opacity: 0;
  transform: translateY(100%);
  animation: word-cycle calc(var(--total) * 2.8s) ease-in-out infinite;
  animation-delay: calc(var(--i) * 2.8s);
}

@keyframes brand-in {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes word-cycle {
  0%,
  5% {
    opacity: 0;
    transform: translateY(100%);
  }
  8%,
  28% {
    opacity: 1;
    transform: translateY(0);
  }
  33%,
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}

.hero-pitch {
  margin: 0 0 32px;
  max-width: 480px;
  font-size: clamp(1.05rem, 2.2vw, 1.3rem);
  line-height: 1.5;
  font-weight: 400;
  color: var(--ink-muted);
  animation: brand-in 0.9s var(--ease) 0.12s both;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  animation: brand-in 0.9s var(--ease) 0.2s both;
}

.slide-scroll-hint {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 48px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
}

.slide-scroll-hint__line {
  display: block;
  width: 1px;
  height: 40px;
  margin: 0 auto;
  background: linear-gradient(to bottom, var(--ink-muted), transparent);
  animation: scroll-pulse 2.2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%,
  100% {
    opacity: 0.35;
    transform: scaleY(0.65);
    transform-origin: top;
  }
  50% {
    opacity: 0.9;
    transform: scaleY(1);
    transform-origin: top;
  }
}

.slide__title {
  margin: 0 0 16px;
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 4.8vw, 3.4rem);
  font-weight: 750;
  letter-spacing: -0.035em;
  line-height: 1.08;
  color: var(--ink);
}

.slide__lead {
  margin: 0 0 8px;
  max-width: 520px;
  font-size: 1.05rem;
  line-height: 1.55;
  color: var(--ink-muted);
}

.slide__content--center .slide__lead {
  margin-inline: auto;
}

.slide__content--contact .slide__lead {
  margin-inline: auto;
  margin-bottom: 28px;
}

/* Products — editorial list, not cards */
.product-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.product-row {
  display: grid;
  grid-template-columns: 48px 1fr auto;
  gap: 16px 20px;
  align-items: center;
  padding: 28px 0;
  border-bottom: 1px solid var(--line);
  transition: background 0.25s ease;
}

.product-row:hover {
  background: rgba(20, 20, 19, 0.02);
}

.product-row__num {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--ink-faint);
}

.product-row__name {
  margin: 0 0 6px;
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.4vw, 1.55rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.product-row__text {
  margin: 0;
  max-width: 48ch;
  font-size: 0.98rem;
  line-height: 1.5;
  color: var(--ink-muted);
}

.product-row--cover {
  align-items: start;
}

.product-row__cover {
  margin: 16px 0 0;
  max-width: 520px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--line);
  background: #0a1628;
}

.product-row__cover img {
  width: 100%;
  height: auto;
  display: block;
}

.product-row__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  text-decoration: none;
  white-space: nowrap;
  border-bottom: 1px solid transparent;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.product-row__cta:hover {
  border-bottom-color: var(--ink);
  transform: translateX(2px);
}

.pillar-grid {
  display: grid;
  gap: 32px;
  margin-top: 44px;
  text-align: left;
}

@media (min-width: 720px) {
  .pillar-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
}

.pillar__num {
  display: block;
  margin-bottom: 12px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--ink-faint);
}

.pillar__title {
  margin: 0 0 8px;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ink);
}

.pillar__text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--ink-muted);
}

.partner {
  display: block;
  max-width: 380px;
  margin: 28px auto 0;
  padding: 8px 0;
  text-decoration: none;
  color: inherit;
  text-align: center;
  transition: opacity 0.2s ease;
}

.partner:hover {
  opacity: 0.85;
}

.partner__logo {
  width: min(140px, 50vw);
  height: auto;
  margin: 0 auto 18px;
  filter: grayscale(1) contrast(1.1);
  opacity: 0.85;
}

.partner__name {
  margin: 0 0 8px;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
}

.partner__text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--ink-muted);
}

.team-person {
  display: grid;
  gap: 28px;
  align-items: center;
  padding: 8px 0;
}

@media (min-width: 720px) {
  .team-person {
    grid-template-columns: 200px 1fr;
    gap: 40px;
  }
}

.team-person__photo {
  aspect-ratio: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--paper-deep);
}

.team-person__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
}

.team-person__role {
  margin: 0 0 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.team-person__name {
  margin: 0 0 12px;
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.8vw, 1.85rem);
  font-weight: 750;
  letter-spacing: -0.03em;
  color: var(--ink);
}

.team-person__bio {
  margin: 0 0 8px;
  font-size: 0.97rem;
  line-height: 1.55;
  color: var(--ink-muted);
}

.team-person__bio a {
  color: var(--accent);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.team-person__social {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
}

.team-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  color: var(--ink);
  background: transparent;
  border: 1px solid var(--line);
  text-decoration: none;
  transition:
    border-color 0.2s,
    background 0.2s;
}

.team-social:hover {
  border-color: var(--line-strong);
  background: rgba(20, 20, 19, 0.03);
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 48px;
}

.deck-footer {
  padding-top: 28px;
  border-top: 1px solid var(--line);
}

.deck-footer__legal {
  margin: 0 0 14px;
  font-size: 13px;
  color: var(--ink-faint);
  max-width: 48ch;
  margin-inline: auto;
}

.deck-footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 14px;
}

.deck-footer__links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.deck-footer__links a:hover {
  color: var(--ink);
}

.deck-footer__copy {
  margin: 0;
  font-size: 12px;
  color: var(--ink-faint);
}

@media (max-width: 768px) {
  .deck-nav {
    right: 10px;
    gap: 8px;
  }

  .deck-nav__num {
    display: none;
  }

  .deck-nav__bar {
    height: 16px;
  }

  .deck-nav__dot--active .deck-nav__bar {
    height: 28px;
  }

  .slide {
    padding: calc(var(--header-h) + 18px) 20px 40px;
  }

  .slide__content--hero {
    text-align: center;
  }

  .hero-title__word {
    left: 50%;
    transform: translate(-50%, 100%);
  }

  @keyframes word-cycle {
    0%,
    5% {
      opacity: 0;
      transform: translate(-50%, 100%);
    }
    8%,
    28% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    33%,
    100% {
      opacity: 0;
      transform: translate(-50%, -100%);
    }
  }

  .hero-pitch {
    margin-inline: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-actions .btn {
    width: 100%;
    max-width: 280px;
  }

  .product-row {
    grid-template-columns: 36px 1fr;
    gap: 8px 14px;
  }

  .product-row__cta {
    grid-column: 2;
    justify-self: start;
  }

  .contact-actions .btn {
    width: 100%;
    max-width: 280px;
  }

  .slide-scroll-hint {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-title__brand,
  .hero-title__word,
  .hero-pitch,
  .hero-actions,
  .slide-scroll-hint__line {
    animation: none;
  }

  .hero-title__word {
    position: static;
    opacity: 1;
    transform: none;
  }

  .hero-title__rotator {
    height: auto;
  }

  .hero-title__word:not(:first-child) {
    display: none;
  }

  .product-row__cta:hover {
    transform: none;
  }

  .deck {
    scroll-behavior: auto;
  }
}
</style>
