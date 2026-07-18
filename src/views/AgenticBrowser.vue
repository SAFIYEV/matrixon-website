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
      </header>

      <section class="browser-page__block" aria-labelledby="catch-heading">
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

      <section class="browser-page__block" aria-labelledby="how-heading">
        <h2 id="how-heading" class="browser-page__h2">{{ t.browserHowTitle }}</h2>
        <ol class="browser-page__steps">
          <li v-for="(step, i) in steps" :key="i">{{ t[step.textKey] }}</li>
        </ol>
        <p class="browser-page__summary">{{ t.browserHowSummary }}</p>
      </section>

      <section class="browser-page__block" aria-labelledby="license-heading">
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
</style>
