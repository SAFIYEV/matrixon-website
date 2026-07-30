<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useSiteLocale } from '../composables/useSiteLocale'

const { t } = useSiteLocale()

const studioUrl = 'https://mixa.matrixon.org'

const services = computed(() => [
  { title: t.value.mixaS1Title, text: t.value.mixaS1Text },
  { title: t.value.mixaS2Title, text: t.value.mixaS2Text },
  { title: t.value.mixaS3Title, text: t.value.mixaS3Text },
  { title: t.value.mixaS4Title, text: t.value.mixaS4Text },
])

const features = computed(() => [
  t.value.mixaF1,
  t.value.mixaF2,
  t.value.mixaF3,
  t.value.mixaF4,
  t.value.mixaF5,
  t.value.mixaF6,
  t.value.mixaF7,
])

const howSteps = computed(() => [
  t.value.mixaHowStep1,
  t.value.mixaHowStep2,
  t.value.mixaHowStep3,
])

const plans = computed(() => [
  {
    name: t.value.mixaPlanStart,
    price: t.value.mixaPlanStartPrice,
    credits: t.value.mixaPlanStartCredits,
    hint: t.value.mixaPlanStartHint,
    priority: false,
  },
  {
    name: t.value.mixaPlanStandard,
    price: t.value.mixaPlanStandardPrice,
    credits: t.value.mixaPlanStandardCredits,
    hint: t.value.mixaPlanStandardHint,
    priority: true,
  },
  {
    name: t.value.mixaPlanPro,
    price: t.value.mixaPlanProPrice,
    credits: t.value.mixaPlanProCredits,
    hint: t.value.mixaPlanProHint,
    priority: true,
  },
])
</script>

<template>
  <main class="mixa">
    <div class="mixa__inner">
      <RouterLink class="mixa__back" to="/">{{ t.mixaBack }}</RouterLink>

      <header class="mixa__hero">
        <div class="mixa__hero-copy">
          <p class="mixa__eyebrow">{{ t.mixaEyebrow }}</p>
          <h1 class="mixa__brand">{{ t.mixaHeroTitle }}</h1>
          <p class="mixa__tagline">{{ t.mixaHeroTagline }}</p>
          <p class="mixa__intro">{{ t.mixaIntro }}</p>
          <div class="mixa__actions">
            <a
              class="btn btn--primary btn--lg"
              :href="studioUrl"
              target="_blank"
              rel="noopener noreferrer"
            >{{ t.mixaCtaStudio }}</a>
            <a
              class="btn btn--outline btn--lg"
              :href="studioUrl"
              target="_blank"
              rel="noopener noreferrer"
            >{{ t.mixaCtaTry }}</a>
          </div>
        </div>
        <div class="mixa__visual" aria-hidden="true">
          <span class="mixa__visual-orbit mixa__visual-orbit--one" />
          <span class="mixa__visual-orbit mixa__visual-orbit--two" />
          <span class="mixa__visual-glow" />
          <div class="mixa__visual-card">
            <span class="mixa__visual-label">IDENTITY / 01</span>
            <strong>MIXA</strong>
            <span>AI STUDIO</span>
          </div>
        </div>
      </header>

      <p class="mixa__positioning">{{ t.mixaPositioning }}</p>

      <section class="mixa__block mixa__block--about" aria-labelledby="mixa-about">
        <h2 id="mixa-about" class="mixa__h2">{{ t.mixaAboutTitle }}</h2>
        <p class="mixa__body">{{ t.mixaAboutText }}</p>
        <p class="mixa__body">{{ t.mixaAboutAudience }}</p>
      </section>

      <section class="mixa__block mixa__block--services" aria-labelledby="mixa-services">
        <h2 id="mixa-services" class="mixa__h2">{{ t.mixaServicesTitle }}</h2>
        <ol class="mixa__services">
          <li v-for="(s, i) in services" :key="s.title" class="mixa__service">
            <span class="mixa__service-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <h3 class="mixa__h3">{{ s.title }}</h3>
              <p class="mixa__body">{{ s.text }}</p>
            </div>
          </li>
        </ol>
      </section>

      <section class="mixa__block mixa__block--features" aria-labelledby="mixa-features">
        <h2 id="mixa-features" class="mixa__h2">{{ t.mixaFeaturesTitle }}</h2>
        <ul class="mixa__features">
          <li v-for="item in features" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="mixa__block mixa__block--how" aria-labelledby="mixa-how">
        <h2 id="mixa-how" class="mixa__h2">{{ t.mixaHowTitle }}</h2>
        <ol class="mixa__steps">
          <li v-for="(step, i) in howSteps" :key="i">
            <span class="mixa__step-num">{{ i + 1 }}</span>
            <span>{{ step }}</span>
          </li>
        </ol>
      </section>

      <section class="mixa__block mixa__block--pricing" aria-labelledby="mixa-pricing">
        <h2 id="mixa-pricing" class="mixa__h2">{{ t.mixaPricingTitle }}</h2>
        <p class="mixa__body">{{ t.mixaPricingLead }}</p>
        <p class="mixa__body mixa__body--note">{{ t.mixaPricingNote }}</p>
        <div class="mixa__plans">
          <article
            v-for="plan in plans"
            :key="plan.name"
            class="mixa__plan"
            :class="{ 'mixa__plan--featured': plan.name === t.mixaPlanPro }"
          >
            <h3 class="mixa__plan-name">{{ plan.name }}</h3>
            <p class="mixa__plan-price">{{ plan.price }}</p>
            <p class="mixa__plan-credits">{{ plan.credits }}</p>
            <p class="mixa__plan-hint">{{ plan.hint }}</p>
            <p v-if="plan.priority" class="mixa__plan-extra">{{ t.mixaPlanPriority }}</p>
          </article>
        </div>
      </section>

      <section class="mixa__final" aria-labelledby="mixa-final">
        <h2 id="mixa-final" class="mixa__h2">{{ t.mixaFinalTitle }}</h2>
        <p class="mixa__body">{{ t.mixaFinalText }}</p>
        <a
          class="btn btn--primary btn--lg"
          :href="studioUrl"
          target="_blank"
          rel="noopener noreferrer"
        >{{ t.mixaCtaStudio }}</a>
      </section>
    </div>
  </main>
</template>

<style scoped>
.mixa {
  position: relative;
  z-index: 1;
  padding: 32px 24px 96px;
}

.mixa__inner {
  max-width: 880px;
  margin: 0 auto;
}

.mixa__back {
  display: inline-block;
  margin-bottom: 36px;
  font-size: 14px;
  font-weight: 550;
  color: var(--ink-muted);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}

.mixa__back:hover {
  color: var(--ink);
  border-bottom-color: var(--ink);
}

.mixa__hero {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--line);
}

.mixa__eyebrow {
  margin: 0 0 12px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.mixa__brand {
  margin: 0 0 8px;
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--ink);
}

.mixa__tagline {
  margin: 0 0 20px;
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 3vw, 1.65rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink-muted);
}

.mixa__intro {
  margin: 0 0 28px;
  max-width: 640px;
  font-size: clamp(1.02rem, 2vw, 1.12rem);
  line-height: 1.55;
  color: var(--ink-muted);
}

.mixa__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.mixa__positioning {
  margin: 0 0 48px;
  max-width: 36ch;
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.5vw, 1.45rem);
  font-weight: 650;
  letter-spacing: -0.02em;
  line-height: 1.35;
  color: var(--ink);
}

.mixa__block {
  margin-bottom: 52px;
}

.mixa__h2 {
  margin: 0 0 16px;
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.mixa__h3 {
  margin: 0 0 8px;
  font-size: 1.08rem;
  font-weight: 650;
  letter-spacing: -0.015em;
  color: var(--ink);
}

.mixa__body {
  margin: 0 0 12px;
  font-size: 1.02rem;
  line-height: 1.55;
  color: var(--ink-muted);
}

.mixa__body:last-child {
  margin-bottom: 0;
}

.mixa__body--note {
  margin-top: 4px;
  margin-bottom: 24px;
  font-size: 0.95rem;
  color: var(--ink-faint);
}

.mixa__services {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.mixa__service {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 16px;
  padding: 24px 0;
  border-bottom: 1px solid var(--line);
}

.mixa__service-num {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--ink-faint);
  padding-top: 4px;
}

.mixa__features {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

@media (min-width: 640px) {
  .mixa__features {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px 28px;
  }
}

.mixa__features li {
  position: relative;
  padding-left: 16px;
  font-size: 0.98rem;
  line-height: 1.45;
  color: var(--ink-muted);
}

.mixa__features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ink);
}

.mixa__steps {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mixa__steps li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 1.02rem;
  line-height: 1.5;
  color: var(--ink-muted);
}

.mixa__step-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink);
}

.mixa__plans {
  display: grid;
  gap: 16px;
  margin-top: 8px;
}

@media (min-width: 720px) {
  .mixa__plans {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

.mixa__plan {
  padding: 24px 20px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
}

.mixa__plan--featured {
  border-color: var(--ink);
}

.mixa__plan-name {
  margin: 0 0 12px;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--ink);
}

.mixa__plan-price {
  margin: 0 0 8px;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 750;
  letter-spacing: -0.03em;
  color: var(--ink);
}

.mixa__plan-credits {
  margin: 0 0 4px;
  font-size: 0.95rem;
  font-weight: 550;
  color: var(--ink-soft);
}

.mixa__plan-hint {
  margin: 0;
  font-size: 0.9rem;
  color: var(--ink-faint);
}

.mixa__plan-extra {
  margin: 14px 0 0;
  padding-top: 12px;
  border-top: 1px solid var(--line);
  font-size: 12px;
  font-weight: 550;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.mixa__final {
  margin-top: 16px;
  padding-top: 40px;
  border-top: 1px solid var(--line);
}

.mixa__final .mixa__body {
  margin-bottom: 24px;
  max-width: 42ch;
}

@media (max-width: 768px) {
  .mixa {
    padding: 22px 16px 64px;
  }

  .mixa__back {
    margin-bottom: 24px;
  }

  .mixa__hero {
    margin-bottom: 32px;
    padding-bottom: 28px;
  }

  .mixa__actions .btn {
    width: 100%;
  }

  .mixa__service {
    grid-template-columns: 36px 1fr;
  }
}

/* Product detail visual system */
.mixa__inner {
  max-width: 1040px;
}

.mixa__hero {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(340px, 1.05fr);
  gap: clamp(40px, 8vw, 86px);
  align-items: center;
  margin-bottom: 0;
  padding: 28px 0 64px;
}

.mixa__hero-copy {
  min-width: 0;
}

.mixa__brand {
  font-size: clamp(3.1rem, 7vw, 5.4rem);
  line-height: 0.94;
  letter-spacing: -0.06em;
}

.mixa__visual {
  position: relative;
  isolation: isolate;
  min-height: 440px;
  overflow: hidden;
  border: 1px solid rgba(126, 77, 201, 0.18);
  border-radius: 24px;
  background:
    radial-gradient(circle at 35% 28%, rgba(245, 191, 255, 0.82), transparent 25%),
    radial-gradient(circle at 78% 72%, rgba(119, 82, 210, 0.58), transparent 32%),
    linear-gradient(145deg, #faf2ff 0%, #ded3ff 48%, #eee9ff 100%);
  box-shadow:
    0 34px 90px rgba(105, 68, 174, 0.2),
    0 8px 24px rgba(105, 68, 174, 0.08);
  transition:
    transform 0.45s var(--ease),
    box-shadow 0.45s var(--ease);
}

.mixa__visual:hover {
  transform: translateY(-9px) rotate(0.7deg);
  box-shadow:
    -10px 42px 100px rgba(105, 68, 174, 0.28),
    18px 10px 36px rgba(227, 118, 215, 0.14);
}

.mixa__visual-glow {
  position: absolute;
  inset: 26% 25%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.88);
  filter: blur(34px);
  animation: mixa-pulse 5s ease-in-out infinite;
}

.mixa__visual-orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  border: 1px solid rgba(69, 41, 115, 0.28);
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(-18deg);
}

.mixa__visual-orbit--one {
  width: 118%;
  height: 46%;
  animation: mixa-orbit 14s linear infinite;
}

.mixa__visual-orbit--two {
  width: 72%;
  height: 92%;
  animation: mixa-orbit-reverse 18s linear infinite;
}

.mixa__visual-card {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;
  width: min(72%, 310px);
  aspect-ratio: 0.78;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, 0.68);
  border-radius: 24px;
  background:
    linear-gradient(150deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.22)),
    rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(14px);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.8),
    0 24px 60px rgba(70, 42, 118, 0.23);
  transform: translate(-50%, -50%) rotate(-5deg);
  transition: transform 0.55s var(--ease);
}

.mixa__visual:hover .mixa__visual-card {
  transform: translate(-50%, -52%) rotate(-1deg) scale(1.025);
}

.mixa__visual-card strong {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 4.6rem);
  line-height: 0.9;
  letter-spacing: -0.065em;
  color: #25153f;
}

.mixa__visual-card > span:last-child,
.mixa__visual-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.13em;
  color: rgba(37, 21, 63, 0.62);
}

.mixa__visual-label {
  margin-bottom: auto;
}

@keyframes mixa-pulse {
  0%,
  100% {
    opacity: 0.62;
    transform: scale(0.88);
  }
  50% {
    opacity: 1;
    transform: scale(1.08);
  }
}

@keyframes mixa-orbit {
  to {
    transform: translate(-50%, -50%) rotate(342deg);
  }
}

@keyframes mixa-orbit-reverse {
  to {
    transform: translate(-50%, -50%) rotate(-378deg);
  }
}

.mixa__positioning {
  margin: 64px 0 76px;
  max-width: 31ch;
  font-size: clamp(1.4rem, 3vw, 2rem);
}

.mixa__block {
  margin: 0;
  padding: 64px 0;
  border-top: 1px solid var(--line);
}

.mixa__h2 {
  margin-bottom: 22px;
  font-size: clamp(1.7rem, 4vw, 2.45rem);
  letter-spacing: -0.035em;
}

.mixa__block--about .mixa__body {
  max-width: 58ch;
  font-size: 1.08rem;
}

.mixa__services {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  border-top: 0;
}

.mixa__service {
  min-height: 220px;
  display: block;
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.44);
  transition:
    transform 0.36s var(--ease),
    border-color 0.36s ease,
    box-shadow 0.36s ease;
}

.mixa__service:hover {
  transform: translateY(-6px);
  border-color: rgba(118, 74, 187, 0.32);
  box-shadow: 0 22px 52px rgba(92, 55, 154, 0.11);
}

.mixa__service-num {
  display: block;
  margin-bottom: 40px;
}

.mixa__features {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.mixa__features li {
  min-height: 58px;
  display: flex;
  align-items: center;
  padding: 14px 18px 14px 42px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.35);
}

.mixa__features li::before {
  left: 20px;
  top: 50%;
  width: 7px;
  height: 7px;
  background: #815ac2;
  transform: translateY(-50%);
}

.mixa__block--how {
  margin: 36px 0;
  padding: clamp(38px, 6vw, 60px);
  border: none;
  border-radius: 22px;
  background:
    radial-gradient(circle at 92% 8%, rgba(211, 145, 255, 0.28), transparent 35%),
    #211630;
}

.mixa__block--how .mixa__h2 {
  color: #f8f4fb;
}

.mixa__block--how .mixa__steps li {
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
  color: rgba(248, 244, 251, 0.72);
}

.mixa__block--how .mixa__step-num {
  border-color: rgba(255, 255, 255, 0.22);
  color: #d9b6ff;
}

.mixa__plans {
  gap: 18px;
  margin-top: 28px;
}

.mixa__plan {
  min-height: 270px;
  padding: 28px 24px;
  border-radius: 18px;
  box-shadow: 0 12px 36px rgba(55, 35, 88, 0.06);
  transition:
    transform 0.38s var(--ease),
    box-shadow 0.38s var(--ease);
}

.mixa__plan:hover {
  transform: translateY(-7px);
  box-shadow: 0 26px 64px rgba(78, 45, 128, 0.14);
}

.mixa__plan--featured {
  color: #f8f4fb;
  background:
    radial-gradient(circle at 85% 0%, rgba(182, 111, 244, 0.35), transparent 38%),
    #211630;
}

.mixa__plan--featured .mixa__plan-name,
.mixa__plan--featured .mixa__plan-price,
.mixa__plan--featured .mixa__plan-credits {
  color: #f8f4fb;
}

.mixa__plan--featured .mixa__plan-hint,
.mixa__plan--featured .mixa__plan-extra {
  color: rgba(248, 244, 251, 0.65);
}

.mixa__final {
  margin-top: 36px;
  padding: 64px 0 8px;
}

@media (max-width: 820px) {
  .mixa__hero {
    grid-template-columns: 1fr;
  }

  .mixa__visual {
    min-height: 400px;
    max-width: 620px;
  }
}

@media (max-width: 560px) {
  .mixa__hero {
    padding-top: 12px;
  }

  .mixa__services,
  .mixa__features {
    grid-template-columns: 1fr;
  }

  .mixa__block {
    padding: 48px 0;
  }

  .mixa__block--how {
    margin-inline: -4px;
    padding: 36px 24px;
  }

  .mixa__visual {
    min-height: 350px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mixa__visual,
  .mixa__visual-card,
  .mixa__visual-glow,
  .mixa__visual-orbit,
  .mixa__service,
  .mixa__plan {
    animation: none;
    transition-duration: 0.01ms;
  }
}
</style>
