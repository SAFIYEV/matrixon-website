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
    <div class="browser-page__mesh" aria-hidden="true" />
    <div class="browser-page__inner">
      <RouterLink class="browser-page__back" to="/">{{ t.browserBack }}</RouterLink>

      <header class="browser-page__hero">
        <p class="browser-page__eyebrow">{{ t.browserEyebrow }}</p>
        <h1 class="browser-page__title">{{ t.browserHeroTitle }}</h1>
        <p class="browser-page__intro">{{ t.browserIntro }}</p>
        <a
          class="btn btn--primary btn--lg browser-page__github"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t.browserGithubCta }}
        </a>
      </header>

      <section class="browser-page__catch" aria-labelledby="catch-heading">
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
        <h2 id="features-heading" class="browser-page__h2 browser-page__h2--center">
          {{ t.browserFeaturesTitle }}
        </h2>
        <div class="browser-page__grid">
          <article v-for="(f, i) in features" :key="i" class="browser-page__card">
            <div class="browser-page__card-dot" aria-hidden="true" />
            <h3 class="browser-page__h3">{{ t[f.titleKey] }}</h3>
            <p class="browser-page__card-text">{{ t[f.textKey] }}</p>
          </article>
        </div>
      </section>

      <section class="browser-page__how" aria-labelledby="how-heading">
        <h2 id="how-heading" class="browser-page__h2">{{ t.browserHowTitle }}</h2>
        <ol class="browser-page__steps">
          <li v-for="(step, i) in steps" :key="i">{{ t[step.textKey] }}</li>
        </ol>
        <p class="browser-page__summary">{{ t.browserHowSummary }}</p>
      </section>

      <section class="browser-page__license" aria-labelledby="license-heading">
        <h2 id="license-heading" class="browser-page__h2">{{ t.browserLicenseTitle }}</h2>
        <p class="browser-page__body">{{ t.browserLicenseText }}</p>
        <a
          class="btn btn--outline btn--lg browser-page__github-secondary"
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

.browser-page__mesh {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.5;
  background-image:
    radial-gradient(circle at 20% 15%, rgba(26, 74, 158, 0.12) 0%, transparent 45%),
    radial-gradient(circle at 85% 55%, rgba(60, 192, 180, 0.1) 0%, transparent 42%);
  mask-image: radial-gradient(ellipse 70% 70% at 50% 25%, #000 0%, transparent 75%);
}

.browser-page__inner {
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
}

.browser-page__back {
  display: inline-block;
  margin-bottom: 36px;
  font-size: 15px;
  font-weight: 600;
  color: var(--m-navy);
  text-decoration: none;
  border-bottom: 1px solid rgba(26, 74, 158, 0.3);
  transition:
    color 0.22s ease,
    border-color 0.22s ease,
    transform 0.22s ease;
}

.browser-page__back:hover {
  border-bottom-color: var(--m-navy);
  transform: translateX(-3px);
}

.browser-page__hero {
  margin-bottom: 48px;
}

.browser-page__eyebrow {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--m-blue);
}

.browser-page__title {
  margin: 0 0 20px;
  font-size: clamp(1.65rem, 4.5vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--text);
}

.browser-page__intro {
  margin: 0 0 28px;
  font-size: clamp(1.02rem, 2.2vw, 1.15rem);
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 720px;
}

.browser-page__github {
  text-decoration: none;
}

.browser-page__catch,
.browser-page__how,
.browser-page__license {
  margin-bottom: 48px;
  padding: 28px 26px;
  background: var(--surface-soft);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  transition:
    box-shadow 0.35s ease,
    border-color 0.3s ease;
}

.browser-page__catch:hover,
.browser-page__how:hover,
.browser-page__license:hover {
  box-shadow: 0 18px 44px rgba(26, 74, 158, 0.07);
  border-color: rgba(26, 74, 158, 0.1);
}

.browser-page__h2 {
  margin: 0 0 14px;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.browser-page__h2--center {
  text-align: center;
  margin-bottom: 28px;
}

.browser-page__body,
.browser-page__summary {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.browser-page__summary {
  margin-top: 16px;
  font-weight: 600;
  color: var(--text);
}

.browser-page__shots {
  margin-bottom: 56px;
}

.browser-page__shots-grid {
  display: grid;
  gap: 20px;
}

@media (min-width: 720px) {
  .browser-page__shots-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.browser-page__shot {
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  background: #fff;
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.06);
  transition:
    transform 0.34s cubic-bezier(0.33, 1, 0.68, 1),
    box-shadow 0.34s ease;
}

.browser-page__shot:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 48px rgba(26, 74, 158, 0.1);
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
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--m-navy);
  text-align: center;
  border-top: 1px solid var(--border);
  background: var(--surface-soft);
}

.browser-page__features {
  margin-bottom: 48px;
}

.browser-page__grid {
  display: grid;
  gap: 18px;
}

@media (min-width: 640px) {
  .browser-page__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .browser-page__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .browser-page__card:last-child {
    grid-column: span 1;
  }
}

.browser-page__card {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 24px 22px;
  border: 1px solid var(--border);
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.04);
  transition:
    transform 0.34s cubic-bezier(0.33, 1, 0.68, 1),
    box-shadow 0.34s ease,
    border-color 0.28s ease;
}

.browser-page__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(26, 74, 158, 0.09);
  border-color: rgba(26, 74, 158, 0.12);
}

.browser-page__card-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gradient);
  margin-bottom: 14px;
}

.browser-page__h3 {
  margin: 0 0 10px;
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.browser-page__card-text {
  margin: 0;
  font-size: 15px;
  line-height: 1.55;
  color: var(--text-muted);
}

.browser-page__steps {
  margin: 0;
  padding-left: 1.35rem;
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--text-muted);
}

.browser-page__steps li {
  margin-bottom: 10px;
}

.browser-page__steps li:last-child {
  margin-bottom: 0;
}

.browser-page__license .browser-page__body {
  margin-bottom: 24px;
}

.browser-page__github-secondary {
  text-decoration: none;
}

@media (max-width: 768px) {
  .browser-page {
    padding: 22px 16px 64px;
  }

  .browser-page__back {
    margin-bottom: 24px;
    font-size: 14px;
  }

  .browser-page__hero {
    margin-bottom: 34px;
  }

  .browser-page__catch,
  .browser-page__how,
  .browser-page__license {
    margin-bottom: 32px;
    padding: 22px 16px;
    border-radius: 20px;
  }

  .browser-page__shots {
    margin-bottom: 40px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .browser-page__back,
  .browser-page__shot,
  .browser-page__card {
    transition-duration: 0.01ms;
  }

  .browser-page__back:hover,
  .browser-page__shot:hover,
  .browser-page__card:hover {
    transform: none;
  }
}
</style>
