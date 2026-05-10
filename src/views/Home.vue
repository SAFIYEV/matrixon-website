<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSiteLocale } from '../composables/useSiteLocale'
import SocialIcon from '../components/SocialIcon.vue'

const { t } = useSiteLocale()

const mail = 'info@matrixon.org'
const phoneHref = 'tel:+994107365773'

const linkWeb3Frens = 'https://t.me/web3frensCA'
const linkIbragimIn = 'https://www.linkedin.com/in/ibragim-gasymov-6a9445401/'

const maratLinks = [
  { href: 'https://www.linkedin.com/in/safiyevmarat/', labelKey: 'socialLinkedIn' as const, network: 'linkedin' as const },
  { href: 'https://t.me/SafiyevToday', labelKey: 'socialTelegram' as const, network: 'telegram' as const },
  { href: 'https://x.com/SafiyevMarat', labelKey: 'socialX' as const, network: 'x' as const },
  { href: 'https://www.instagram.com/maratsafiyev19/', labelKey: 'socialInstagram' as const, network: 'instagram' as const },
  { href: 'https://www.youtube.com/@SafiyevMarat', labelKey: 'socialYoutube' as const, network: 'youtube' as const },
]
</script>

<template>
  <main>
    <section class="hero" aria-labelledby="hero-title">
      <div class="mesh mesh--hero" aria-hidden="true" />
      <div class="hero__orbit" aria-hidden="true">
        <span class="hero__ring hero__ring--a" />
        <span class="hero__ring hero__ring--b" />
      </div>
      <svg class="hero__net" viewBox="0 0 800 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M120 280 L260 140 L420 200 L560 100 L680 240 M260 140 L420 90 M420 200 L560 220 M120 280 L380 320 L680 240"
          stroke="url(#hero-net-grad)"
          stroke-width="1.1"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.55"
        />
        <circle cx="120" cy="280" r="5" fill="var(--m-navy)" opacity="0.35" />
        <circle cx="260" cy="140" r="5" fill="var(--m-blue)" opacity="0.4" />
        <circle cx="420" cy="200" r="6" fill="var(--m-teal)" opacity="0.45" />
        <circle cx="560" cy="100" r="5" fill="var(--m-blue)" opacity="0.35" />
        <circle cx="680" cy="240" r="5" fill="var(--m-navy)" opacity="0.35" />
        <circle cx="380" cy="320" r="4" fill="var(--m-teal)" opacity="0.3" />
        <defs>
          <linearGradient id="hero-net-grad" x1="120" y1="100" x2="680" y2="300" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1a4a9e" stop-opacity="0.35" />
            <stop offset="0.5" stop-color="#2a8eb5" stop-opacity="0.45" />
            <stop offset="1" stop-color="#3cc0b4" stop-opacity="0.35" />
          </linearGradient>
        </defs>
      </svg>
      <div class="hero__inner">
        <div class="hero__mark-block">
          <p class="hero__mark-ghost" aria-hidden="true">MATRIXON</p>
          <h1 id="hero-title" class="hero__mark">MATRIXON</h1>
        </div>
        <p class="hero__pitch">
          {{ t.heroPitch }}
        </p>
        <div class="hero__actions">
          <a class="btn btn--primary btn--lg" :href="`mailto:${mail}`">{{ t.heroCtaContact }}</a>
          <RouterLink class="btn btn--outline btn--lg" :to="{ path: '/', hash: '#founder' }">{{
            t.heroCtaAbout
          }}</RouterLink>
        </div>
      </div>
    </section>

    <section id="vectors" class="section section--soft">
      <div class="section__inner">
        <h2 class="section__title">
          {{ t.vectorsTitleBefore }}<br />
          <span class="gradient-text">{{ t.vectorsTitleAccent }}</span>
        </h2>
        <p class="section__lead section__lead--vectors">
          {{ t.vectorsLead }}
        </p>
        <div class="vectors">
          <article class="vector-card">
            <div class="vector-card__product">CoLearn</div>
            <p class="vector-card__text">{{ t.edtechText }}</p>
            <RouterLink class="vector-card__link" to="/colearn">{{ t.edtechMore }}</RouterLink>
          </article>
          <article class="vector-card">
            <div class="vector-card__tag vector-card__tag--legal">{{ t.legalTitle }}</div>
            <p class="vector-card__text">{{ t.legalText }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="founder" class="section section--team section--soft">
      <div class="section__inner">
        <h2 class="section__title">{{ t.teamSectionTitle }}</h2>
        <p class="section__lead section__lead--team">{{ t.teamSectionLead }}</p>

        <div class="team-grid">
          <article class="person-card" aria-labelledby="person-marat">
            <div class="person-card__media">
              <div class="person-card__media-inner person-card__media-inner--photo">
                <img
                  class="person-card__img person-card__img--marat"
                  src="/founders/marat.png"
                  width="640"
                  height="640"
                  loading="lazy"
                  decoding="async"
                  :alt="t.founderMaratName"
                />
              </div>
            </div>
            <div class="person-card__body">
              <p class="person-card__badge">{{ t.founderMaratBadge }}</p>
              <h3 id="person-marat" class="person-card__name">{{ t.founderMaratName }}</h3>
              <div class="person-card__main">
                <p class="person-card__text">{{ t.founderMaratP1 }}</p>
                <p class="person-card__text">
                  {{ t.founderMaratWeb3Lead }}
                  <a class="person-card__link" :href="linkWeb3Frens" target="_blank" rel="noopener noreferrer">{{
                    t.founderWeb3MediaName
                  }}</a>.
                </p>
                <p class="person-card__text">{{ t.founderMaratActivities }}</p>
              </div>
              <div class="person-card__social">
                <a
                  v-for="item in maratLinks"
                  :key="item.labelKey"
                  class="person-social"
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

          <article class="person-card" aria-labelledby="person-ibragim">
            <div class="person-card__media">
              <div class="person-card__media-inner person-card__media-inner--photo">
                <img
                  class="person-card__img person-card__img--ibragim"
                  src="/founders/ibragim.png"
                  width="640"
                  height="640"
                  loading="lazy"
                  decoding="async"
                  :alt="t.founderIbragimName"
                />
              </div>
            </div>
            <div class="person-card__body">
              <p class="person-card__badge">{{ t.founderIbragimBadge }}</p>
              <h3 id="person-ibragim" class="person-card__name">{{ t.founderIbragimName }}</h3>
              <div class="person-card__main">
                <p class="person-card__text">{{ t.founderIbragimBio }}</p>
              </div>
              <div class="person-card__social">
                <a
                  class="person-social"
                  :href="linkIbragimIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="t.founderIbragimLinkedInLabel"
                >
                  <SocialIcon network="linkedin" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--delivery">
      <div class="section__inner">
        <h2 class="section__title">
          {{ t.qualityTitleBefore }}<br />
          <span class="gradient-text">{{ t.qualityTitleAccent }}</span>
        </h2>
        <p class="section__lead">{{ t.qualityLead }}</p>
        <div class="delivery-grid">
          <article class="delivery-card">
            <h3 class="delivery-card__title">{{ t.panelStability }}</h3>
            <p class="delivery-card__text">{{ t.panelStabilityVal }}</p>
          </article>
          <article class="delivery-card">
            <h3 class="delivery-card__title">{{ t.panelDelivery }}</h3>
            <p class="delivery-card__text">{{ t.panelDeliveryVal }}</p>
          </article>
          <article class="delivery-card">
            <h3 class="delivery-card__title">{{ t.panelDocs }}</h3>
            <p class="delivery-card__text">{{ t.panelDocsVal }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="cta-band" id="contact">
      <div class="cta-band__inner">
        <h2 class="cta-band__title">{{ t.ctaTitle }}</h2>
        <p class="cta-band__text">
          {{ t.ctaText }}
        </p>
        <div class="cta-band__actions">
          <a class="btn btn--light btn--lg" :href="`mailto:${mail}`">{{ t.ctaEmail }}</a>
          <a class="btn btn--outline-light btn--lg" :href="phoneHref">{{ t.ctaPhone }}</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.mesh--hero {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.42;
  background-image:
    radial-gradient(circle at 50% 42%, rgba(26, 74, 158, 0.09) 0%, transparent 52%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Cg fill='none' stroke='%231a4a9e' stroke-opacity='.14' stroke-width='1'%3E%3Cpath d='M40 120h520M80 280h440M120 440h360'/%3E%3Cpath d='M120 80v440M300 60v480M480 100v400'/%3E%3C/g%3E%3Cg fill='%232a8eb5' fill-opacity='.28'%3E%3Ccircle cx='120' cy='120' r='4'/%3E%3Ccircle cx='300' cy='200' r='4'/%3E%3Ccircle cx='480' cy='160' r='4'/%3E%3Ccircle cx='200' cy='320' r='4'/%3E%3Ccircle cx='400' cy='360' r='4'/%3E%3Ccircle cx='320' cy='480' r='4'/%3E%3C/g%3E%3C/svg%3E");
  background-size:
    100% 100%,
    min(680px, 95vw);
  background-position:
    center,
    50% 38%;
  background-repeat: no-repeat;
  mask-image: radial-gradient(ellipse 72% 62% at 50% 40%, #000 0%, transparent 75%);
}

.hero {
  position: relative;
  z-index: 1;
  min-height: min(88vh, 900px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 72px;
  text-align: center;
  overflow: hidden;
}

.hero__orbit {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.hero__ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(26, 74, 158, 0.11);
  aspect-ratio: 1;
  animation: hero-ring 12s ease-in-out infinite;
}

.hero__ring--a {
  width: min(92vw, 620px);
}

.hero__ring--b {
  width: min(74vw, 480px);
  border-color: rgba(60, 192, 180, 0.14);
  animation-direction: alternate-reverse;
  animation-duration: 14s;
}

@keyframes hero-ring {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.04) rotate(3deg);
    opacity: 0.82;
  }
}

.hero__net {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: min(1040px, 125vw);
  height: auto;
  z-index: 0;
  opacity: 0.9;
  pointer-events: none;
}

.hero__inner {
  position: relative;
  z-index: 2;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__mark-block {
  position: relative;
  margin: 0 0 4px;
  line-height: 0.9;
}

.hero__mark-ghost {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: clamp(2.85rem, 13.5vw, 8.5rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  white-space: nowrap;
  -webkit-text-stroke: 1px rgba(26, 74, 158, 0.16);
  color: transparent;
  user-select: none;
  z-index: 0;
  pointer-events: none;
}

.hero__mark {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: clamp(2.85rem, 13.5vw, 8.5rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  line-height: 0.9;
  background: linear-gradient(102deg, var(--m-navy) 0%, var(--m-blue) 40%, var(--m-teal) 92%);
  background-size: 165% 165%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: hero-grad 16s ease-in-out infinite alternate;
  filter: drop-shadow(0 20px 48px rgba(26, 74, 158, 0.14));
}

@keyframes hero-grad {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.hero__pitch {
  margin: 26px 0 30px;
  font-size: clamp(1rem, 2.15vw, 1.2rem);
  line-height: 1.55;
  color: var(--text-muted);
  max-width: 540px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
}

@media (max-width: 1024px) {
  .hero {
    min-height: min(82vh, 760px);
    padding: 30px 20px 58px;
  }

  .hero__net {
    width: min(900px, 132vw);
    top: 43%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__mark {
    animation: none;
    background-position: 40% 50%;
  }

  .hero__ring {
    animation: none;
  }
}

.section {
  position: relative;
  z-index: 1;
  padding: 88px 24px;
  scroll-margin-top: 88px;
}

@media (max-width: 768px) {
  .hero {
    min-height: min(78vh, 660px);
    padding: 20px 16px 44px;
  }

  .hero__net {
    width: min(760px, 160vw);
    top: 44%;
    opacity: 0.72;
  }

  .hero__pitch {
    margin: 20px 0 24px;
    font-size: 1rem;
  }

  .hero__actions {
    width: 100%;
    gap: 10px;
  }

  .hero__actions .btn {
    width: 100%;
    max-width: 340px;
  }

  .section {
    padding: 64px 16px;
    scroll-margin-top: 74px;
  }

  .section__lead {
    margin-bottom: 30px;
    font-size: 1rem;
  }

  .vector-card,
  .delivery-card {
    padding: 20px 18px;
  }

  .person-card__body {
    padding: 18px 16px 18px;
  }

  .person-card__name {
    margin-bottom: 10px;
    font-size: 1.3rem;
  }

  .person-card__text {
    font-size: 0.95rem;
    line-height: 1.52;
  }

  .person-card__social {
    margin-top: 12px;
    padding-top: 12px;
  }

  .cta-band {
    padding: 52px 16px;
    scroll-margin-top: 74px;
  }
}

@media (max-width: 480px) {
  .hero__mark,
  .hero__mark-ghost {
    font-size: clamp(2.35rem, 15vw, 3.5rem);
  }

  .hero__pitch {
    max-width: 100%;
  }

  .vectors,
  .team-grid,
  .delivery-grid {
    gap: 14px;
  }

  .person-card__media {
    width: min(190px, 64vw);
  }

  .person-social {
    width: 40px;
    height: 40px;
  }

  .cta-band__title {
    font-size: clamp(1.45rem, 8.2vw, 1.85rem);
  }

  .cta-band__text {
    font-size: 0.98rem;
    margin-bottom: 20px;
  }
}

.section--soft {
  background: var(--surface-soft);
}

.section__inner {
  max-width: var(--max);
  margin: 0 auto;
}

.section__inner--narrow {
  text-align: center;
}

.section__inner--split {
  display: grid;
  gap: 40px;
  align-items: center;
}

@media (min-width: 900px) {
  .section__inner--split {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
}

.section__title {
  margin: 0 0 18px;
  font-size: clamp(1.85rem, 3.2vw, 2.65rem);
  line-height: 1.12;
  letter-spacing: -0.025em;
  font-weight: 800;
  text-align: center;
}

.section__title--left {
  text-align: left;
}

.gradient-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.section__lead {
  margin: 0 auto 48px;
  max-width: 640px;
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-muted);
}

.section__lead--vectors {
  margin-bottom: 40px;
}

.section__lead--left {
  margin: 0 0 0;
  text-align: left;
}

.vectors {
  display: grid;
  gap: 20px;
  max-width: 920px;
  margin: 0 auto;
}

@media (min-width: 720px) {
  .vectors {
    grid-template-columns: 1fr 1fr;
  }
}

.vector-card {
  background: #fff;
  border-radius: var(--radius-xl);
  padding: 28px 26px;
  border: 1px solid var(--border);
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition:
    transform 0.35s cubic-bezier(0.33, 1, 0.68, 1),
    box-shadow 0.35s ease,
    border-color 0.3s ease;
}

.vector-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 26px 56px rgba(26, 74, 158, 0.1);
  border-color: rgba(26, 74, 158, 0.14);
}

.vector-card__product {
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--m-navy);
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(42, 142, 181, 0.4);
  width: 100%;
}

.vector-card__tag {
  display: inline-block;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--m-navy);
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(42, 142, 181, 0.35);
}

.vector-card__tag--legal {
  color: var(--m-blue);
  border-bottom-color: rgba(60, 192, 180, 0.45);
}

.vector-card__text {
  margin: 0 0 16px;
  font-size: 1.05rem;
  line-height: 1.55;
  color: var(--text-muted);
  flex: 1;
}

.vector-card__link {
  font-weight: 600;
  font-size: 15px;
  color: var(--m-navy);
  text-decoration: none;
  border-bottom: 1px solid rgba(26, 74, 158, 0.35);
  align-self: flex-start;
  transition:
    border-color 0.25s ease,
    color 0.25s ease,
    gap 0.25s ease;
}

.vector-card__link:hover {
  border-bottom-color: var(--m-navy);
  color: var(--m-blue);
}

.section--team {
  padding-bottom: 96px;
}

.section__lead--team {
  margin-bottom: 36px;
}

.team-grid {
  display: grid;
  gap: 20px;
  align-items: stretch;
  max-width: 1080px;
  margin: 0 auto;
}

@media (min-width: 900px) {
  .team-grid {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}

.person-card {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  min-height: 0;
  height: 100%;
  align-items: stretch;
  background: #fff;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.9) inset,
    0 20px 48px rgba(15, 23, 42, 0.07);
  overflow: hidden;
  transition:
    transform 0.38s cubic-bezier(0.33, 1, 0.68, 1),
    box-shadow 0.38s ease,
    border-color 0.3s ease;
}

.person-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.9) inset,
    0 28px 64px rgba(26, 74, 158, 0.12);
  border-color: rgba(26, 74, 158, 0.12);
}

@media (min-width: 640px) {
  .person-card {
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: 1fr;
  }
}

.person-card__media {
  position: relative;
  aspect-ratio: 1;
  width: min(240px, 78vw);
  max-width: 100%;
  margin-inline: auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--surface-soft);
}

@media (min-width: 640px) {
  .person-card__media {
    width: min(200px, 30vw);
    max-width: 220px;
    margin-inline: 0;
    align-self: start;
    border-radius: var(--radius-lg);
  }
}

.person-card__media-inner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.person-card__media-inner--photo {
  padding: 0;
  overflow: hidden;
}

.person-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.55s cubic-bezier(0.33, 1, 0.68, 1);
}

.person-card:hover .person-card__img {
  transform: scale(1.05);
}

.person-card__img--marat {
  object-position: center 22%;
}

.person-card__img--ibragim {
  object-position: center 18%;
}

.person-card__body {
  padding: 22px 22px 24px;
  display: flex;
  flex-direction: column;
  text-align: left;
  min-width: 0;
  min-height: 0;
  height: 100%;
}

.person-card__badge {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--m-blue);
}

.person-card__name {
  margin: 0 0 14px;
  font-size: clamp(1.28rem, 2.4vw, 1.55rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: var(--text);
}

.person-card__main {
  flex: 1 1 auto;
  min-height: 0;
}

.person-card__text {
  margin: 0 0 12px;
  font-size: 0.97rem;
  line-height: 1.58;
  color: var(--text-muted);
}

.person-card__main .person-card__text:last-child {
  margin-bottom: 0;
}

.person-card__link {
  color: var(--m-navy);
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: rgba(26, 74, 158, 0.35);
  text-underline-offset: 3px;
}

.person-card__link:hover {
  text-decoration-color: var(--m-navy);
}

.person-card__social {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}

.person-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 11px;
  color: var(--m-navy);
  background: var(--surface-soft);
  border: 1px solid var(--border);
  text-decoration: none;
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s,
    transform 0.15s,
    box-shadow 0.2s;
}

.person-social:hover {
  border-color: rgba(26, 74, 158, 0.35);
  background: #fff;
  color: var(--m-blue);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(26, 74, 158, 0.1);
}

.section--delivery {
  background: #fff;
}

.delivery-grid {
  display: grid;
  gap: 16px;
  margin-top: 8px;
}

@media (min-width: 720px) {
  .delivery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
}

.delivery-card {
  padding: 22px 20px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--surface-soft);
  transition:
    transform 0.32s cubic-bezier(0.33, 1, 0.68, 1),
    box-shadow 0.32s ease,
    border-color 0.28s ease,
    background 0.28s ease;
}

.delivery-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 36px rgba(26, 74, 158, 0.08);
  border-color: rgba(26, 74, 158, 0.12);
  background: #fff;
}

.delivery-card__title {
  margin: 0 0 8px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
}

.delivery-card__text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.cta-band {
  position: relative;
  z-index: 1;
  padding: 72px 24px;
  background: var(--gradient);
  color: #fff;
  text-align: center;
  scroll-margin-top: 88px;
}

.cta-band__inner {
  max-width: 640px;
  margin: 0 auto;
}

.cta-band__title {
  margin: 0 0 12px;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.cta-band__text {
  margin: 0 0 26px;
  font-size: 1.05rem;
  opacity: 0.95;
}

.cta-band__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

@media (prefers-reduced-motion: reduce) {
  .vector-card,
  .person-card,
  .delivery-card,
  .person-card__img {
    transition-duration: 0.01ms;
  }

  .vector-card:hover,
  .person-card:hover,
  .delivery-card:hover,
  .person-card:hover .person-card__img {
    transform: none;
  }
}
</style>
