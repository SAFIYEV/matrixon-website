<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSiteLocale } from '../composables/useSiteLocale'

const { t } = useSiteLocale()

const githubUrl = 'https://github.com/SAFIYEV/MATRIXON-AGENTIC-BROWSER'

const features = [
  { titleKey: 'browserF1Title' as const, textKey: 'browserF1Text' as const },
  { titleKey: 'browserF2Title' as const, textKey: 'browserF2Text' as const },
  { titleKey: 'browserF3Title' as const, textKey: 'browserF3Text' as const },
  { titleKey: 'browserF4Title' as const, textKey: 'browserF4Text' as const },
  { titleKey: 'browserF5Title' as const, textKey: 'browserF5Text' as const },
]

const steps = [
  { textKey: 'browserHowStep1' as const },
  { textKey: 'browserHowStep2' as const },
  { textKey: 'browserHowStep3' as const },
]

const screenshots = [
  { src: '/matrixon-browser/screen-start.png', captionKey: 'browserShotStart' as const },
  { src: '/matrixon-browser/screen-chat.png', captionKey: 'browserShotChat' as const },
  { src: '/matrixon-browser/screen-agent.png', captionKey: 'browserShotAgent' as const },
  { src: '/matrixon-browser/screen-settings.png', captionKey: 'browserShotSettings' as const },
]
</script>

<template>
  <main class="browser-page">
    <div class="browser-page__inner">
      <RouterLink class="browser-page__back" to="/">{{ t.browserBack }}</RouterLink>

      <header class="browser-page__hero">
        <div class="browser-page__hero-copy">
          <p class="browser-page__eyebrow">{{ t.browserEyebrow }}</p>
          <h1 class="browser-page__title">{{ t.browserHeroTitle }}</h1>
          <p class="browser-page__intro">{{ t.browserIntro }}</p>
          <a
            class="btn btn--primary btn--lg"
            :href="githubUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t.browserGithubCta }}
          </a>
        </div>
        <figure class="browser-page__hero-visual">
          <img
            src="/matrixon-browser/screen-start.png"
            :alt="t.browserShotStart"
            width="1280"
            height="720"
            decoding="async"
          />
          <figcaption>{{ t.browserShotStart }}</figcaption>
        </figure>
      </header>

      <section class="browser-page__block browser-page__block--catch" aria-labelledby="catch-heading">
        <h2 id="catch-heading" class="browser-page__h2">{{ t.browserCatchTitle }}</h2>
        <p class="browser-page__body">{{ t.browserCatchText }}</p>
      </section>

      <section class="browser-page__shots" aria-label="Screenshots">
        <div class="browser-page__shots-grid">
          <figure v-for="(shot, i) in screenshots" :key="i" class="browser-page__shot">
            <img
              :src="shot.src"
              :alt="t[shot.captionKey]"
              width="1280"
              height="720"
              loading="lazy"
              decoding="async"
            />
            <figcaption>{{ t[shot.captionKey] }}</figcaption>
          </figure>
        </div>
      </section>

      <section class="browser-page__features" aria-labelledby="features-heading">
        <h2 id="features-heading" class="browser-page__h2">{{ t.browserFeaturesTitle }}</h2>
        <div class="browser-page__grid">
          <article v-for="(f, i) in features" :key="i" class="browser-page__feature">
            <h3 class="browser-page__h3">{{ t[f.titleKey] }}</h3>
            <p class="browser-page__card-text">{{ t[f.textKey] }}</p>
          </article>
        </div>
      </section>

      <section class="browser-page__block browser-page__block--how" aria-labelledby="how-heading">
        <h2 id="how-heading" class="browser-page__h2">{{ t.browserHowTitle }}</h2>
        <ol class="browser-page__steps">
          <li v-for="(step, i) in steps" :key="i">{{ t[step.textKey] }}</li>
        </ol>
        <p class="browser-page__summary">{{ t.browserHowSummary }}</p>
      </section>

      <section class="browser-page__block browser-page__block--license" aria-labelledby="license-heading">
        <h2 id="license-heading" class="browser-page__h2">{{ t.browserLicenseTitle }}</h2>
        <p class="browser-page__body">{{ t.browserLicenseText }}</p>
        <a
          class="btn btn--outline-dark btn--lg browser-page__github-secondary"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t.browserGithubCta }}
        </a>
      </section>
    </div>
  </main>
</template>

<style scoped>
.browser-page {
  position: relative;
  z-index: 1;
  min-height: min(100vh, 1200px);
  padding: 32px 24px 96px;
}

.browser-page__inner {
  position: relative;
  z-index: 1;
  max-width: 880px;
  margin: 0 auto;
}

.browser-page__back {
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

.browser-page__back:hover {
  color: var(--ink);
  border-bottom-color: var(--ink);
}

.browser-page__hero {
  margin-bottom: 56px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--line);
}

.browser-page__eyebrow {
  margin: 0 0 12px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.browser-page__title {
  margin: 0 0 18px;
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 750;
  letter-spacing: -0.035em;
  line-height: 1.1;
  color: var(--ink);
}

.browser-page__intro {
  margin: 0 0 28px;
  font-size: clamp(1.02rem, 2vw, 1.15rem);
  line-height: 1.55;
  color: var(--ink-muted);
  max-width: 640px;
}

.browser-page__block {
  margin-bottom: 48px;
}

.browser-page__h2 {
  margin: 0 0 14px;
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.browser-page__body,
.browser-page__summary {
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.55;
  color: var(--ink-muted);
}

.browser-page__summary {
  margin-top: 16px;
  font-weight: 550;
  color: var(--ink-soft);
}

.browser-page__shots {
  margin-bottom: 56px;
}

.browser-page__shots-grid {
  display: grid;
  gap: 16px;
}

@media (min-width: 720px) {
  .browser-page__shots-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.browser-page__shot {
  margin: 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--surface);
}

.browser-page__shot img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top center;
}

.browser-page__shot figcaption {
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-muted);
  border-top: 1px solid var(--line);
}

.browser-page__features {
  margin-bottom: 48px;
}

.browser-page__grid {
  display: grid;
  gap: 28px 32px;
  margin-top: 8px;
}

@media (min-width: 640px) {
  .browser-page__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.browser-page__feature {
  padding: 0;
}

.browser-page__h3 {
  margin: 0 0 8px;
  font-size: 1.05rem;
  font-weight: 650;
  letter-spacing: -0.015em;
  color: var(--ink);
}

.browser-page__card-text {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  color: var(--ink-muted);
}

.browser-page__steps {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 1.02rem;
  line-height: 1.6;
  color: var(--ink-muted);
}

.browser-page__steps li {
  margin-bottom: 8px;
}

.browser-page__steps li:last-child {
  margin-bottom: 0;
}

.browser-page__github-secondary {
  margin-top: 20px;
  text-decoration: none;
}

@media (max-width: 768px) {
  .browser-page {
    padding: 22px 16px 64px;
  }

  .browser-page__back {
    margin-bottom: 24px;
  }

  .browser-page__hero {
    margin-bottom: 40px;
    padding-bottom: 28px;
  }

  .browser-page__block {
    margin-bottom: 36px;
  }
}

/* Product detail visual system */
.browser-page__inner {
  max-width: 1040px;
}

.browser-page__hero {
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(380px, 1.12fr);
  gap: clamp(36px, 7vw, 76px);
  align-items: center;
  margin-bottom: 72px;
  padding: 28px 0 64px;
}

.browser-page__hero-copy {
  min-width: 0;
}

.browser-page__title {
  font-size: clamp(2.8rem, 6vw, 4.6rem);
  font-weight: 800;
  line-height: 0.96;
  letter-spacing: -0.055em;
}

.browser-page__hero-visual {
  position: relative;
  isolation: isolate;
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(56, 91, 160, 0.2);
  border-radius: 22px;
  background: #0a1628;
  box-shadow:
    0 30px 80px rgba(26, 61, 122, 0.2),
    0 8px 24px rgba(17, 31, 57, 0.12);
  transition:
    transform 0.45s var(--ease),
    box-shadow 0.45s var(--ease);
}

.browser-page__hero-visual::before {
  content: '';
  position: absolute;
  inset: -35% 12% 50%;
  z-index: 1;
  border-radius: 50%;
  background: rgba(80, 142, 255, 0.28);
  filter: blur(34px);
  pointer-events: none;
}

.browser-page__hero-visual:hover {
  transform: translateY(-8px) rotate(-0.6deg);
  box-shadow:
    12px 38px 92px rgba(26, 61, 122, 0.27),
    0 10px 28px rgba(17, 31, 57, 0.14);
}

.browser-page__hero-visual img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
  transition: transform 0.55s var(--ease);
}

.browser-page__hero-visual:hover img {
  transform: scale(1.025);
}

.browser-page__hero-visual figcaption {
  padding: 12px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.7);
}

.browser-page__block,
.browser-page__features,
.browser-page__shots {
  margin: 0;
  padding: 64px 0;
  border-top: 1px solid var(--line);
}

.browser-page__h2 {
  margin-bottom: 22px;
  font-size: clamp(1.7rem, 4vw, 2.45rem);
  letter-spacing: -0.035em;
}

.browser-page__block--catch .browser-page__body {
  max-width: 52ch;
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.6vw, 1.55rem);
  font-weight: 600;
  line-height: 1.42;
  letter-spacing: -0.018em;
  color: var(--ink);
}

.browser-page__shots-grid {
  gap: 22px;
}

.browser-page__shot {
  border-radius: 18px;
  box-shadow: 0 16px 45px rgba(20, 32, 52, 0.07);
  transition:
    transform 0.38s var(--ease),
    box-shadow 0.38s var(--ease);
}

.browser-page__shot:hover {
  transform: translateY(-7px);
  box-shadow: 0 26px 64px rgba(20, 32, 52, 0.13);
}

.browser-page__shot img {
  transition: transform 0.5s var(--ease);
}

.browser-page__shot:hover img {
  transform: scale(1.02);
}

.browser-page__grid {
  gap: 16px;
}

.browser-page__feature {
  min-height: 190px;
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.42);
  transition:
    transform 0.35s var(--ease),
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.browser-page__feature:hover {
  transform: translateY(-5px);
  border-color: rgba(26, 61, 122, 0.34);
  box-shadow: 0 20px 46px rgba(26, 61, 122, 0.1);
}

.browser-page__block--how {
  margin: 36px 0;
  padding: clamp(36px, 6vw, 60px);
  border: none;
  border-radius: 22px;
  background:
    radial-gradient(circle at 95% 0%, rgba(64, 121, 226, 0.28), transparent 36%),
    #111722;
}

.browser-page__block--how .browser-page__h2,
.browser-page__block--how .browser-page__summary {
  color: #f5f6f8;
}

.browser-page__block--how .browser-page__steps {
  padding: 0;
  list-style: none;
  counter-reset: browser-step;
  color: rgba(245, 246, 248, 0.72);
}

.browser-page__block--how .browser-page__steps li {
  counter-increment: browser-step;
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 14px;
  padding: 17px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.browser-page__block--how .browser-page__steps li::before {
  content: counter(browser-step, decimal-leading-zero);
  font-family: var(--font-mono);
  font-size: 11px;
  color: #7ba8ff;
}

.browser-page__block--license {
  padding-bottom: 8px;
}

@media (max-width: 820px) {
  .browser-page__hero {
    grid-template-columns: 1fr;
  }

  .browser-page__hero-visual {
    max-width: 680px;
  }
}

@media (max-width: 560px) {
  .browser-page__hero {
    padding-top: 12px;
  }

  .browser-page__hero .btn {
    width: 100%;
  }

  .browser-page__block,
  .browser-page__features,
  .browser-page__shots {
    padding: 48px 0;
  }

  .browser-page__block--how {
    margin-inline: -4px;
    padding: 36px 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .browser-page__hero-visual,
  .browser-page__hero-visual img,
  .browser-page__shot,
  .browser-page__shot img,
  .browser-page__feature {
    transition-duration: 0.01ms;
  }
}
</style>
