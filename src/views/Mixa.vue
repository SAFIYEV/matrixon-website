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
      </header>

      <p class="mixa__positioning">{{ t.mixaPositioning }}</p>

      <section class="mixa__block" aria-labelledby="mixa-about">
        <h2 id="mixa-about" class="mixa__h2">{{ t.mixaAboutTitle }}</h2>
        <p class="mixa__body">{{ t.mixaAboutText }}</p>
        <p class="mixa__body">{{ t.mixaAboutAudience }}</p>
      </section>

      <section class="mixa__block" aria-labelledby="mixa-services">
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

      <section class="mixa__block" aria-labelledby="mixa-features">
        <h2 id="mixa-features" class="mixa__h2">{{ t.mixaFeaturesTitle }}</h2>
        <ul class="mixa__features">
          <li v-for="item in features" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="mixa__block" aria-labelledby="mixa-how">
        <h2 id="mixa-how" class="mixa__h2">{{ t.mixaHowTitle }}</h2>
        <ol class="mixa__steps">
          <li v-for="(step, i) in howSteps" :key="i">
            <span class="mixa__step-num">{{ i + 1 }}</span>
            <span>{{ step }}</span>
          </li>
        </ol>
      </section>

      <section class="mixa__block" aria-labelledby="mixa-pricing">
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
</style>
