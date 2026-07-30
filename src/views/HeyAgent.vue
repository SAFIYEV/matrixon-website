<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useSiteLocale } from '../composables/useSiteLocale'

const { locale, t } = useSiteLocale()

const githubUrl = 'https://github.com/SAFIYEV/HeyAgent'

const capabilities = computed(() => [
  { title: t.value.heyAgentF1Title, text: t.value.heyAgentF1Text },
  { title: t.value.heyAgentF2Title, text: t.value.heyAgentF2Text },
  { title: t.value.heyAgentF3Title, text: t.value.heyAgentF3Text },
  { title: t.value.heyAgentF4Title, text: t.value.heyAgentF4Text },
  { title: t.value.heyAgentF5Title, text: t.value.heyAgentF5Text },
  { title: t.value.heyAgentF6Title, text: t.value.heyAgentF6Text },
])

const interfaces = computed(() => [
  { marker: '>_', title: t.value.heyAgentCliTitle, text: t.value.heyAgentCliText },
  { marker: '▣', title: t.value.heyAgentDesktopTitle, text: t.value.heyAgentDesktopText },
  { marker: '↗', title: t.value.heyAgentTelegramTitle, text: t.value.heyAgentTelegramText },
])

const steps = computed(() => [
  t.value.heyAgentHowStep1,
  t.value.heyAgentHowStep2,
  t.value.heyAgentHowStep3,
  t.value.heyAgentHowStep4,
])

const safetyModes = computed(() => [
  t.value.heyAgentSafetyAsk,
  t.value.heyAgentSafetyRisky,
  t.value.heyAgentSafetyAllowlist,
  t.value.heyAgentSafetyFull,
])

const quickStart = computed(() => {
  const task = locale.value === 'ru'
    ? 'Открой блокнот и напиши список покупок'
    : 'Open Notepad and write a shopping list'

  return `git clone https://github.com/SAFIYEV/HeyAgent.git
cd HeyAgent
npm install
npm run build
npx hey onboard
npx hey ask "${task}"`
})
</script>

<template>
  <main class="heyagent">
    <div class="heyagent__inner">
      <RouterLink class="heyagent__back" to="/">{{ t.heyAgentBack }}</RouterLink>

      <header class="heyagent__hero">
        <div class="heyagent__hero-copy">
          <p class="heyagent__eyebrow">{{ t.heyAgentEyebrow }}</p>
          <h1 class="heyagent__title">{{ t.heyAgentHeroTitle }}</h1>
          <p class="heyagent__tagline">{{ t.heyAgentHeroTagline }}</p>
          <p class="heyagent__intro">{{ t.heyAgentIntro }}</p>
          <div class="heyagent__actions">
            <a
              class="btn btn--primary btn--lg"
              :href="githubUrl"
              target="_blank"
              rel="noopener noreferrer"
            >{{ t.heyAgentCtaGithub }}</a>
            <a class="btn btn--outline btn--lg" href="#quickstart">{{ t.heyAgentCtaQuickStart }}</a>
          </div>
          <p class="heyagent__meta">{{ t.heyAgentLicense }}</p>
        </div>
        <figure class="heyagent__visual">
          <img
            src="/heyagent/logo.png"
            width="1254"
            height="1254"
            alt="HeyAgent"
            decoding="async"
          />
        </figure>
      </header>

      <p class="heyagent__positioning">{{ t.heyAgentPositioning }}</p>

      <section class="heyagent__section" aria-labelledby="heyagent-capabilities">
        <div class="heyagent__section-head">
          <p class="heyagent__section-index">01</p>
          <h2 id="heyagent-capabilities" class="heyagent__h2">{{ t.heyAgentCapabilitiesTitle }}</h2>
        </div>
        <div class="heyagent__capabilities">
          <article v-for="(item, i) in capabilities" :key="item.title" class="heyagent__capability">
            <span class="heyagent__capability-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="heyagent__h3">{{ item.title }}</h3>
            <p class="heyagent__body">{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section class="heyagent__section" aria-labelledby="heyagent-interfaces">
        <div class="heyagent__section-head">
          <p class="heyagent__section-index">02</p>
          <h2 id="heyagent-interfaces" class="heyagent__h2">{{ t.heyAgentInterfacesTitle }}</h2>
        </div>
        <div class="heyagent__interfaces">
          <article v-for="item in interfaces" :key="item.title" class="heyagent__interface">
            <span class="heyagent__interface-marker" aria-hidden="true">{{ item.marker }}</span>
            <h3 class="heyagent__h3">{{ item.title }}</h3>
            <p class="heyagent__body">{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section class="heyagent__section heyagent__section--split" aria-labelledby="heyagent-how">
        <div>
          <p class="heyagent__section-index">03</p>
          <h2 id="heyagent-how" class="heyagent__h2">{{ t.heyAgentHowTitle }}</h2>
        </div>
        <ol class="heyagent__steps">
          <li v-for="(step, i) in steps" :key="step">
            <span class="heyagent__step-num">{{ i + 1 }}</span>
            <span>{{ step }}</span>
          </li>
        </ol>
      </section>

      <section class="heyagent__section heyagent__model" aria-labelledby="heyagent-models">
        <div>
          <p class="heyagent__section-index">04</p>
          <h2 id="heyagent-models" class="heyagent__h2">{{ t.heyAgentModelsTitle }}</h2>
          <p class="heyagent__body">{{ t.heyAgentModelsText }}</p>
        </div>
        <p class="heyagent__model-list">{{ t.heyAgentModelsList }}</p>
      </section>

      <section class="heyagent__section heyagent__safety" aria-labelledby="heyagent-safety">
        <div class="heyagent__safety-copy">
          <p class="heyagent__section-index">05</p>
          <h2 id="heyagent-safety" class="heyagent__h2">{{ t.heyAgentSafetyTitle }}</h2>
          <p class="heyagent__body">{{ t.heyAgentSafetyText }}</p>
        </div>
        <ul class="heyagent__modes">
          <li v-for="mode in safetyModes" :key="mode">{{ mode }}</li>
        </ul>
      </section>

      <section id="quickstart" class="heyagent__section heyagent__quick" aria-labelledby="heyagent-quick">
        <div>
          <p class="heyagent__section-index">06</p>
          <h2 id="heyagent-quick" class="heyagent__h2">{{ t.heyAgentQuickTitle }}</h2>
          <p class="heyagent__body">{{ t.heyAgentQuickText }}</p>
          <p class="heyagent__requirements">{{ t.heyAgentRequirements }}</p>
        </div>
        <pre class="heyagent__code"><code>{{ quickStart }}</code></pre>
      </section>

      <section class="heyagent__final" aria-labelledby="heyagent-final">
        <h2 id="heyagent-final" class="heyagent__final-title">{{ t.heyAgentFinalTitle }}</h2>
        <p class="heyagent__body">{{ t.heyAgentFinalText }}</p>
        <a
          class="btn btn--primary btn--lg"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
        >{{ t.heyAgentCtaGithub }}</a>
      </section>
    </div>
  </main>
</template>

<style scoped>
.heyagent {
  position: relative;
  z-index: 1;
  padding: 32px 24px 96px;
}

.heyagent__inner {
  max-width: 1040px;
  margin: 0 auto;
}

.heyagent__back {
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

.heyagent__back:hover {
  color: var(--ink);
  border-bottom-color: var(--ink);
}

.heyagent__hero {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: clamp(36px, 7vw, 84px);
  align-items: center;
  padding: 24px 0 56px;
  border-bottom: 1px solid var(--line);
}

.heyagent__hero-copy {
  min-width: 0;
}

.heyagent__eyebrow,
.heyagent__section-index,
.heyagent__meta,
.heyagent__requirements {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.heyagent__eyebrow {
  margin: 0 0 14px;
}

.heyagent__title {
  margin: 0 0 10px;
  max-width: 100%;
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 4.35rem);
  font-weight: 800;
  letter-spacing: -0.055em;
  line-height: 0.95;
  color: var(--ink);
}

.heyagent__tagline {
  margin: 0 0 22px;
  max-width: 16ch;
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 3vw, 1.85rem);
  font-weight: 650;
  letter-spacing: -0.025em;
  line-height: 1.15;
  color: var(--ink-muted);
}

.heyagent__intro {
  margin: 0 0 28px;
  max-width: 620px;
  font-size: clamp(1.02rem, 2vw, 1.13rem);
  line-height: 1.58;
  color: var(--ink-muted);
}

.heyagent__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.heyagent__meta {
  margin: 20px 0 0;
  text-transform: none;
  letter-spacing: 0.06em;
}

.heyagent__visual {
  position: relative;
  isolation: isolate;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow:
    0 24px 70px rgba(16, 20, 32, 0.1),
    0 5px 18px rgba(16, 20, 32, 0.06);
  transition:
    transform 0.45s var(--ease),
    box-shadow 0.45s var(--ease);
}

.heyagent__visual::before {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 18% 10% 2%;
  border-radius: 40%;
  background:
    radial-gradient(circle at 30% 55%, rgba(113, 88, 224, 0.48), transparent 56%),
    radial-gradient(circle at 72% 52%, rgba(59, 190, 112, 0.38), transparent 58%);
  filter: blur(34px);
  opacity: 0.62;
  transform: translateY(32px) scale(0.9);
  transition:
    opacity 0.45s ease,
    transform 0.55s var(--ease),
    filter 0.45s ease;
}

.heyagent__visual img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: inherit;
  animation: heyagent-logo-float 6s ease-in-out infinite;
  transition: transform 0.45s var(--ease);
}

.heyagent__visual:hover {
  transform: translateY(-9px) rotate(0.7deg);
  box-shadow:
    -14px 34px 86px rgba(88, 68, 185, 0.18),
    18px 18px 42px rgba(51, 164, 98, 0.1);
}

.heyagent__visual:hover::before {
  opacity: 0.88;
  filter: blur(42px);
  transform: translate(-12px, 42px) scale(1.02);
}

.heyagent__visual:hover img {
  animation: none;
  transform: translate(5px, -4px) scale(1.015);
}

@keyframes heyagent-logo-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.heyagent__positioning {
  margin: 56px 0 76px;
  max-width: 32ch;
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 650;
  letter-spacing: -0.025em;
  line-height: 1.32;
  color: var(--ink);
}

.heyagent__section {
  padding: 64px 0;
  border-top: 1px solid var(--line);
}

.heyagent__section-head {
  margin-bottom: 32px;
}

.heyagent__section-index {
  margin: 0 0 12px;
}

.heyagent__h2,
.heyagent__final-title {
  margin: 0 0 18px;
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 4vw, 2.5rem);
  font-weight: 750;
  letter-spacing: -0.035em;
  line-height: 1.1;
  color: var(--ink);
}

.heyagent__h3 {
  margin: 0 0 10px;
  font-family: var(--font-display);
  font-size: 1.12rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  color: var(--ink);
}

.heyagent__body {
  margin: 0;
  font-size: 1rem;
  line-height: 1.58;
  color: var(--ink-muted);
}

.heyagent__capabilities {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--line);
}

.heyagent__capability {
  position: relative;
  padding: 28px 32px 30px 0;
  border-bottom: 1px solid var(--line);
}

.heyagent__capability:nth-child(odd) {
  border-right: 1px solid var(--line);
}

.heyagent__capability:nth-child(even) {
  padding-left: 32px;
}

.heyagent__capability-num {
  display: block;
  margin-bottom: 28px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--ink-faint);
}

.heyagent__interfaces {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.heyagent__interface {
  min-height: 230px;
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
}

.heyagent__interface-marker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 44px;
  border-radius: 12px;
  background: var(--ink);
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 650;
  color: var(--paper);
}

.heyagent__section--split,
.heyagent__model,
.heyagent__safety,
.heyagent__quick {
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(36px, 8vw, 96px);
  align-items: start;
}

.heyagent__steps {
  margin: 0;
  padding: 0;
  list-style: none;
}

.heyagent__steps li {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 14px;
  align-items: start;
  padding: 20px 0;
  border-bottom: 1px solid var(--line);
  font-size: 1rem;
  line-height: 1.55;
  color: var(--ink-muted);
}

.heyagent__steps li:first-child {
  padding-top: 0;
}

.heyagent__step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid var(--line);
  border-radius: 50%;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink);
}

.heyagent__model {
  align-items: end;
}

.heyagent__model .heyagent__body {
  max-width: 48ch;
}

.heyagent__model-list {
  margin: 0;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.8;
  color: var(--ink);
  background: var(--surface);
}

.heyagent__safety {
  padding-inline: clamp(24px, 5vw, 56px);
  background: var(--ink);
  color: var(--paper);
  border-top: none;
  border-radius: var(--radius-md);
}

.heyagent__safety .heyagent__section-index,
.heyagent__safety .heyagent__body {
  color: rgba(244, 244, 241, 0.65);
}

.heyagent__safety .heyagent__h2 {
  color: var(--paper);
}

.heyagent__modes {
  margin: 0;
  padding: 0;
  list-style: none;
}

.heyagent__modes li {
  padding: 15px 0;
  border-bottom: 1px solid rgba(244, 244, 241, 0.16);
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.5;
  color: rgba(244, 244, 241, 0.82);
}

.heyagent__quick {
  scroll-margin-top: calc(var(--header-h) + 24px);
}

.heyagent__requirements {
  margin: 24px 0 0;
  line-height: 1.6;
}

.heyagent__code {
  margin: 0;
  padding: 26px;
  overflow-x: auto;
  border-radius: var(--radius-md);
  background: #11131b;
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.75;
  color: #8af2a8;
}

.heyagent__final {
  padding: 72px 0 8px;
  border-top: 1px solid var(--line);
}

.heyagent__final-title {
  max-width: 20ch;
}

.heyagent__final .heyagent__body {
  max-width: 46ch;
  margin-bottom: 28px;
}

@media (max-width: 780px) {
  .heyagent {
    padding: 22px 16px 64px;
  }

  .heyagent__back {
    margin-bottom: 20px;
  }

  .heyagent__hero {
    grid-template-columns: 1fr;
    padding-top: 12px;
  }

  .heyagent__visual {
    max-width: 480px;
  }

  .heyagent__positioning {
    margin: 44px 0 56px;
  }

  .heyagent__interfaces {
    grid-template-columns: 1fr;
  }

  .heyagent__interface {
    min-height: 0;
  }

  .heyagent__interface-marker {
    margin-bottom: 28px;
  }

  .heyagent__section--split,
  .heyagent__model,
  .heyagent__safety,
  .heyagent__quick {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

@media (max-width: 560px) {
  .heyagent__title {
    font-size: 2.6rem;
  }

  .heyagent__actions .btn {
    width: 100%;
  }

  .heyagent__capabilities {
    grid-template-columns: 1fr;
  }

  .heyagent__capability,
  .heyagent__capability:nth-child(even) {
    padding: 24px 0;
    border-right: none;
  }

  .heyagent__capability-num {
    margin-bottom: 18px;
  }

  .heyagent__safety {
    margin-inline: -4px;
    padding: 48px 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .heyagent__visual,
  .heyagent__visual::before,
  .heyagent__visual img {
    animation: none;
    transition-duration: 0.01ms;
  }
}
</style>
