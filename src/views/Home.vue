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
      <!-- Slide 0: Hero -->
      <section id="intro" class="slide slide--hero" data-slide="0" aria-label="MATRIXON">
        <div class="slide__bg slide__bg--deck" aria-hidden="true">
          <div class="slide__glow slide__glow--a" />
          <div class="slide__glow slide__glow--b" />
          <div class="slide__lines" />
        </div>
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

      <!-- Slide 1: Product -->
      <section id="product" class="slide slide--on-dark" data-slide="1" aria-labelledby="product-title">
        <div class="slide__bg slide__bg--deck slide__bg--deck-alt" aria-hidden="true">
          <div class="slide__glow slide__glow--b" />
          <div class="slide__lines" />
        </div>
        <div class="slide__content slide__content--split slide__content--light">
          <div class="slide__copy">
            <p class="slide__index slide__index--light">01</p>
            <h2 id="product-title" class="slide__title slide__title--light">
              {{ t.slideProductLine1 }}<br />
              <span class="gradient-text gradient-text--bright">{{ t.slideProductLine2 }}</span>
            </h2>
            <p class="slide__lead slide__lead--light">{{ t.browserCardText }}</p>
            <RouterLink class="btn btn--primary" to="/browser">
              {{ t.browserMore }}
              <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
          <div class="product-showcase" aria-hidden="true">
            <div class="product-showcase__frame">
              <img src="/matrixon-browser/screen-chat.png" width="640" height="400" alt="" loading="lazy" />
            </div>
            <div class="product-showcase__frame product-showcase__frame--offset">
              <img src="/matrixon-browser/screen-agent.png" width="640" height="400" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <!-- Slide 2: Build philosophy -->
      <section id="build" class="slide slide--on-dark" data-slide="2" aria-labelledby="build-title">
        <div class="slide__bg slide__bg--deck" aria-hidden="true">
          <div class="slide__mesh" />
          <div class="slide__glow slide__glow--a" />
        </div>
        <div class="slide__content slide__content--center">
          <p class="slide__index slide__index--light">02</p>
          <h2 id="build-title" class="slide__title slide__title--light slide__title--huge">
            {{ t.qualityTitleBefore }}<br />
            <span class="gradient-text gradient-text--bright">{{ t.qualityTitleAccent }}</span>
          </h2>
          <p class="slide__lead slide__lead--light">{{ t.qualityLead }}</p>
          <div class="pillar-grid">
            <article v-for="item in buildPillars" :key="item.num" class="pillar-card">
              <span class="pillar-card__num">{{ item.num }}</span>
              <h3 class="pillar-card__title">{{ item.title }}</h3>
              <p class="pillar-card__text">{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Slide 3: Partners -->
      <section id="partners" class="slide slide--on-dark" data-slide="3" aria-labelledby="partners-title">
        <div class="slide__bg slide__bg--deck slide__bg--deck-alt" aria-hidden="true">
          <div class="slide__glow slide__glow--a" />
          <div class="slide__lines" />
        </div>
        <div class="slide__content slide__content--center slide__content--light">
          <p class="slide__index slide__index--light">03</p>
          <h2 id="partners-title" class="slide__title slide__title--light">
            {{ t.partnersTitleBefore }}<br />
            <span class="gradient-text gradient-text--bright">{{ t.partnersTitleAccent }}</span>
          </h2>
          <p class="slide__lead slide__lead--light">{{ t.partnersLead }}</p>
          <a
            class="partner-card"
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="t.partnerAwsName"
          >
            <div class="partner-card__inner">
              <img class="partner-card__logo" src="/partners/aws.svg" width="152" height="91" alt="" />
              <h3 class="partner-card__name">{{ t.partnerAwsName }}</h3>
              <p class="partner-card__text">{{ t.partnerAwsText }}</p>
            </div>
          </a>
        </div>
      </section>

      <!-- Slide 4: Team -->
      <section id="team" class="slide slide--on-dark" data-slide="4" aria-labelledby="team-title">
        <div class="slide__bg slide__bg--deck" aria-hidden="true">
          <div class="slide__glow slide__glow--b" />
          <div class="slide__lines" />
        </div>
        <div class="slide__content slide__content--team slide__content--light">
          <div class="slide__head">
            <p class="slide__index slide__index--light">04</p>
            <h2 id="team-title" class="slide__title slide__title--light">{{ t.teamSectionTitle }}</h2>
            <p class="slide__lead slide__lead--light">{{ t.teamSectionLead }}</p>
          </div>
          <article class="team-card" aria-labelledby="person-marat">
            <div class="team-card__photo">
              <img
                src="/founders/marat.png"
                width="480"
                height="480"
                loading="lazy"
                decoding="async"
                :alt="t.founderMaratName"
              />
            </div>
            <div class="team-card__body">
              <p class="team-card__role">{{ t.founderMaratBadge }}</p>
              <h3 id="person-marat" class="team-card__name">{{ t.founderMaratName }}</h3>
              <p class="team-card__bio">{{ t.founderMaratP1 }}</p>
              <p class="team-card__bio">
                {{ t.founderMaratWeb3Lead }}
                <a :href="linkWeb3Frens" target="_blank" rel="noopener noreferrer">{{ t.founderWeb3MediaName }}</a>.
              </p>
              <p class="team-card__bio">{{ t.founderMaratActivities }}</p>
              <div class="team-card__social">
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

      <!-- Slide 5: Contact -->
      <section id="contact" class="slide slide--on-dark" data-slide="5" aria-labelledby="contact-title">
        <div class="slide__bg slide__bg--deck" aria-hidden="true">
          <div class="slide__mesh slide__mesh--bright" />
          <div class="slide__glow slide__glow--a" />
        </div>
        <div class="slide__content slide__content--contact slide__content--light">
          <p class="slide__index slide__index--light">05</p>
          <h2 id="contact-title" class="slide__title slide__title--light">{{ t.ctaTitle }}</h2>
          <p class="slide__lead slide__lead--light">{{ t.ctaText }}</p>
          <div class="contact-actions">
            <a class="btn btn--light btn--lg" :href="`mailto:${mail}`">{{ t.ctaEmail }}</a>
            <a class="btn btn--outline-light btn--lg" :href="phoneHref">{{ t.ctaPhone }}</a>
          </div>
          <footer class="deck-footer">
            <p class="deck-footer__legal">{{ t.founderLegal }}</p>
            <div class="deck-footer__links">
              <a :href="matrixonTelegramHref" target="_blank" rel="noopener noreferrer">
                <SocialIcon network="telegram" />
                {{ t.footerTelegramMatrixon }}
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

/* —— Slide nav —— */
.deck-nav {
  position: fixed;
  right: clamp(16px, 3vw, 40px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 14px 10px;
  border-radius: 20px;
  background: rgba(4, 10, 20, 0.45);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.deck-nav__dot {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  border: none;
  background: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.35);
  transition: color 0.3s ease;
}

.deck-nav__dot--active {
  color: #fff;
}

.deck-nav__num {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  opacity: 0;
  transform: translateX(6px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.deck-nav__dot--active .deck-nav__num,
.deck-nav__dot:hover .deck-nav__num {
  opacity: 1;
  transform: translateX(0);
}

.deck-nav__bar {
  display: block;
  width: 3px;
  height: 28px;
  border-radius: 3px;
  background: currentColor;
  opacity: 0.35;
  transition:
    height 0.35s cubic-bezier(0.34, 1.3, 0.64, 1),
    opacity 0.3s ease,
    background 0.3s ease;
}

.deck-nav__dot--active .deck-nav__bar {
  height: 48px;
  opacity: 1;
  background: var(--gradient);
}

/* —— Slides —— */
.slide {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--header-h) + 32px) clamp(20px, 5vw, 64px) 48px;
  overflow: hidden;
}

.slide__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.slide__bg--deck,
.slide__bg--hero {
  background:
    radial-gradient(ellipse 80% 60% at 20% 0%, rgba(42, 142, 181, 0.28), transparent 55%),
    radial-gradient(ellipse 60% 50% at 90% 30%, rgba(60, 192, 180, 0.18), transparent 50%),
    linear-gradient(160deg, #040a14 0%, #0a1830 50%, #0d2240 100%);
}

.slide__bg--deck-alt {
  background:
    radial-gradient(ellipse 70% 55% at 85% 15%, rgba(42, 142, 181, 0.26), transparent 52%),
    radial-gradient(ellipse 55% 45% at 10% 70%, rgba(60, 192, 180, 0.16), transparent 48%),
    linear-gradient(165deg, #040a14 0%, #0a1830 48%, #0d2240 100%);
}

.slide__content--light {
  color: #fff;
}

.slide__content--light .slide__lead {
  color: rgba(255, 255, 255, 0.72);
}

.slide__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: glow-drift 20s ease-in-out infinite alternate;
}

.slide__glow--a {
  width: 50vw;
  height: 50vw;
  max-width: 600px;
  max-height: 600px;
  top: -10%;
  right: 5%;
  background: rgba(42, 142, 181, 0.35);
}

.slide__glow--b {
  width: 40vw;
  height: 40vw;
  max-width: 480px;
  max-height: 480px;
  bottom: 0;
  left: -8%;
  background: rgba(60, 192, 180, 0.22);
  animation-delay: -8s;
}

.slide__lines {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 15%, transparent 70%);
}

.slide__mesh {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
}

.slide__mesh--bright {
  opacity: 0.15;
}

@keyframes glow-drift {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(30px, -20px) scale(1.1);
  }
}

.slide__content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: var(--max);
}

.slide__content--hero {
  text-align: left;
  color: #fff;
}

.slide__content--split {
  display: grid;
  gap: 48px;
  align-items: center;
}

@media (min-width: 960px) {
  .slide__content--split {
    grid-template-columns: 1fr 1.1fr;
    gap: 56px;
  }
}

.slide__content--center {
  text-align: center;
}

.slide__content--team {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.slide__content--contact {
  text-align: center;
  color: #fff;
}

.slide__eyebrow {
  margin: 0 0 20px;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.slide__index {
  margin: 0 0 16px;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.16em;
  color: var(--m-teal);
}

.slide__index--light {
  color: rgba(255, 255, 255, 0.5);
}

/* —— Hero title —— */
.hero-title {
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 0.92;
}

.hero-title__brand {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 14vw, 9rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  background: linear-gradient(120deg, #fff 0%, #b8ddf0 40%, #7ee8dc 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: brand-shine 12s ease-in-out infinite alternate;
}

.hero-title__rotator {
  position: relative;
  display: block;
  height: clamp(2.8rem, 10vw, 6.5rem);
  overflow: hidden;
  margin-top: 4px;
}

.hero-title__word {
  position: absolute;
  left: 0;
  top: 0;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 8vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  text-transform: lowercase;
  color: rgba(255, 255, 255, 0.92);
  opacity: 0;
  transform: translateY(100%);
  animation: word-cycle calc(var(--total) * 2.8s) ease-in-out infinite;
  animation-delay: calc(var(--i) * 2.8s);
}

@keyframes brand-shine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
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
  margin: 0 0 36px;
  max-width: 520px;
  font-size: clamp(1.1rem, 2.4vw, 1.45rem);
  line-height: 1.5;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

/* —— Scroll hint —— */
.slide-scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 56px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
}

.slide-scroll-hint__line {
  display: block;
  width: 2px;
  height: 48px;
  margin: 0 auto;
  border-radius: 2px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%,
  100% {
    opacity: 0.4;
    transform: scaleY(0.7);
    transform-origin: top;
  }
  50% {
    opacity: 1;
    transform: scaleY(1);
    transform-origin: top;
  }
}

/* —— Typography —— */
.slide__title {
  margin: 0 0 20px;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #fff;
}

.slide__title--light {
  color: #fff;
}

.slide__title--huge {
  font-size: clamp(2.4rem, 6vw, 4.5rem);
}

.slide__lead {
  margin: 0 0 28px;
  max-width: 560px;
  font-size: 1.1rem;
  line-height: 1.58;
  color: rgba(255, 255, 255, 0.68);
}

.slide__content--center .slide__lead {
  margin-inline: auto;
}

.slide__lead--light {
  color: rgba(255, 255, 255, 0.78);
}

.slide__content--contact .slide__lead {
  margin-inline: auto;
}

/* —— Product showcase —— */
.product-showcase {
  position: relative;
  min-height: 320px;
}

.product-showcase__frame {
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: var(--shadow-dark);
  overflow: hidden;
  transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
}

.product-showcase__frame img {
  width: 100%;
  height: auto;
  display: block;
}

.product-showcase__frame--offset {
  position: absolute;
  bottom: -12%;
  right: -4%;
  width: 72%;
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.45);
  animation: float-card 8s ease-in-out infinite;
}

.product-showcase__frame:first-child {
  animation: float-card 7s ease-in-out infinite reverse;
}

@keyframes float-card {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

/* —— Pillars —— */
.pillar-grid {
  display: grid;
  gap: 16px;
  margin-top: 40px;
  text-align: left;
}

@media (min-width: 720px) {
  .pillar-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

.pillar-card {
  padding: 28px 24px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  transition:
    transform 0.35s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}

.pillar-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.07);
}

.pillar-card__num {
  display: block;
  margin-bottom: 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--m-teal);
}

.pillar-card__title {
  margin: 0 0 8px;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
}

.pillar-card__text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.6);
}

/* —— Partners —— */
.partner-card {
  display: block;
  max-width: 420px;
  margin: 8px auto 0;
  text-decoration: none;
  color: inherit;
  border-radius: calc(var(--radius-xl) + 2px);
  padding: 2px;
  background: linear-gradient(135deg, rgba(26, 74, 158, 0.55), rgba(60, 192, 180, 0.45));
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
}

.partner-card__inner {
  padding: 36px 30px;
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.partner-card__logo {
  width: min(152px, 58vw);
  height: auto;
  margin: 0 auto 18px;
}

.partner-card__name {
  margin: 0 0 10px;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
}

.partner-card__text {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.65);
}

/* —— Team —— */
.slide__head {
  max-width: 560px;
}

.team-card {
  display: grid;
  gap: 28px;
  align-items: center;
  padding: 28px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);
}

@media (min-width: 720px) {
  .team-card {
    grid-template-columns: 220px 1fr;
    gap: 40px;
    padding: 32px 36px;
  }
}

.team-card__photo {
  aspect-ratio: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: linear-gradient(160deg, rgba(26, 74, 158, 0.12), rgba(60, 192, 180, 0.1));
}

.team-card__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
}

.team-card__role {
  margin: 0 0 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--m-teal);
}

.team-card__name {
  margin: 0 0 14px;
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #fff;
}

.team-card__bio {
  margin: 0 0 10px;
  font-size: 0.97rem;
  line-height: 1.58;
  color: rgba(255, 255, 255, 0.68);
}

.team-card__bio a {
  color: #b8ddf0;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.team-card__social {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.team-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  text-decoration: none;
  transition:
    background 0.2s,
    border-color 0.2s,
    transform 0.15s;
}

.team-social:hover {
  border-color: rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-2px);
}

/* —— Contact —— */
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
  margin-bottom: 48px;
}

.deck-footer {
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.deck-footer__legal {
  margin: 0 0 16px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  max-width: 48ch;
  margin-inline: auto;
}

.deck-footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 16px;
}

.deck-footer__links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: color 0.2s;
}

.deck-footer__links a:hover {
  color: #fff;
}

.deck-footer__copy {
  margin: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
}

.gradient-text--bright {
  background: linear-gradient(120deg, #fff 0%, #7ee8dc 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* —— Responsive —— */
@media (max-width: 768px) {
  .deck-nav {
    right: 12px;
    gap: 10px;
  }

  .deck-nav__num {
    display: none;
  }

  .deck-nav__bar {
    height: 20px;
  }

  .deck-nav__dot--active .deck-nav__bar {
    height: 32px;
  }

  .slide {
    padding: calc(var(--header-h) + 20px) 20px 40px;
  }

  .slide__content--hero {
    text-align: center;
  }

  .hero-pitch {
    margin-inline: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-actions .btn {
    width: 100%;
    max-width: 300px;
  }

  .product-showcase__frame--offset {
    position: relative;
    bottom: auto;
    right: auto;
    width: 100%;
    margin-top: -40px;
  }

  .contact-actions .btn {
    width: 100%;
    max-width: 300px;
  }

  .slide-scroll-hint {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-title__brand,
  .hero-title__word,
  .slide__glow,
  .product-showcase__frame,
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

  .pillar-card:hover,
  .team-social:hover,
  .partner-card:hover {
    transform: none;
  }

  .deck {
    scroll-behavior: auto;
  }
}
</style>
