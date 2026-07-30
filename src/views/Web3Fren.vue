<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useSiteLocale } from '../composables/useSiteLocale'
import SocialIcon from '../components/SocialIcon.vue'

const { t } = useSiteLocale()

const channelUrl = 'https://t.me/web3frensCA'

const features = computed(() => [
  { title: t.value.web3FrenF1Title, text: t.value.web3FrenF1Text },
  { title: t.value.web3FrenF2Title, text: t.value.web3FrenF2Text },
  { title: t.value.web3FrenF3Title, text: t.value.web3FrenF3Text },
  { title: t.value.web3FrenF4Title, text: t.value.web3FrenF4Text },
])

const howSteps = computed(() => [
  t.value.web3FrenHowStep1,
  t.value.web3FrenHowStep2,
  t.value.web3FrenHowStep3,
])
</script>

<template>
  <main class="w3f">
    <div class="w3f__inner">
      <RouterLink class="w3f__back" to="/">{{ t.web3FrenBack }}</RouterLink>

      <header class="w3f__hero">
        <div class="w3f__hero-copy">
          <p class="w3f__eyebrow">{{ t.web3FrenEyebrow }}</p>
          <h1 class="w3f__brand">{{ t.web3FrenHeroTitle }}</h1>
          <p class="w3f__tagline">{{ t.web3FrenHeroTagline }}</p>
          <p class="w3f__intro">{{ t.web3FrenIntro }}</p>
          <div class="w3f__actions">
            <a
              class="btn btn--primary btn--lg"
              :href="channelUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon network="telegram" />
              {{ t.web3FrenCtaChannel }}
            </a>
          </div>
        </div>
        <figure class="w3f__cover">
          <img
            src="/web3-fren/cover.png"
            :alt="t.web3FrenHeroTitle"
            width="1200"
            height="630"
            loading="eager"
            decoding="async"
          />
        </figure>
      </header>

      <section class="w3f__block w3f__block--about" aria-labelledby="w3f-about">
        <h2 id="w3f-about" class="w3f__h2">{{ t.web3FrenAboutTitle }}</h2>
        <p class="w3f__body">{{ t.web3FrenAboutText }}</p>
        <p class="w3f__body">{{ t.web3FrenAboutText2 }}</p>
      </section>

      <section class="w3f__block w3f__block--features" aria-labelledby="w3f-features">
        <h2 id="w3f-features" class="w3f__h2">{{ t.web3FrenFeaturesTitle }}</h2>
        <ul class="w3f__features">
          <li v-for="(f, i) in features" :key="f.title" class="w3f__feature">
            <span class="w3f__feature-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <h3 class="w3f__h3">{{ f.title }}</h3>
              <p class="w3f__body">{{ f.text }}</p>
            </div>
          </li>
        </ul>
      </section>

      <section class="w3f__block w3f__block--how" aria-labelledby="w3f-how">
        <h2 id="w3f-how" class="w3f__h2">{{ t.web3FrenHowTitle }}</h2>
        <ol class="w3f__steps">
          <li v-for="(step, i) in howSteps" :key="i">
            <span class="w3f__step-num">{{ i + 1 }}</span>
            <span>{{ step }}</span>
          </li>
        </ol>
      </section>

      <section class="w3f__block w3f__block--channel" aria-labelledby="w3f-channel">
        <h2 id="w3f-channel" class="w3f__h2">{{ t.web3FrenChannelTitle }}</h2>
        <p class="w3f__body">{{ t.web3FrenChannelText }}</p>
        <a
          class="w3f__channel-link"
          :href="channelUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon network="telegram" />
          <span>t.me/web3frensCA</span>
        </a>
      </section>

      <section class="w3f__final" aria-labelledby="w3f-final">
        <h2 id="w3f-final" class="w3f__h2">{{ t.web3FrenFinalTitle }}</h2>
        <p class="w3f__body">{{ t.web3FrenFinalText }}</p>
        <a
          class="btn btn--primary btn--lg"
          :href="channelUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon network="telegram" />
          {{ t.web3FrenCtaChannel }}
        </a>
      </section>
    </div>
  </main>
</template>

<style scoped>
.w3f {
  position: relative;
  z-index: 1;
  padding: 32px 24px 96px;
}

.w3f__inner {
  max-width: 880px;
  margin: 0 auto;
}

.w3f__back {
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

.w3f__back:hover {
  color: var(--ink);
  border-bottom-color: var(--ink);
}

.w3f__hero {
  margin-bottom: 32px;
}

.w3f__eyebrow {
  margin: 0 0 12px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.w3f__brand {
  margin: 0 0 8px;
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--ink);
}

.w3f__tagline {
  margin: 0 0 18px;
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 3vw, 1.65rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink-muted);
}

.w3f__intro {
  margin: 0 0 28px;
  max-width: 640px;
  font-size: clamp(1.02rem, 2vw, 1.12rem);
  line-height: 1.55;
  color: var(--ink-muted);
}

.w3f__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.w3f__actions .btn,
.w3f__final .btn {
  gap: 10px;
}

.w3f__cover {
  margin: 0 0 48px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--line);
  background: #0a1628;
}

.w3f__cover img {
  width: 100%;
  height: auto;
  display: block;
}

.w3f__block {
  margin-bottom: 52px;
}

.w3f__h2 {
  margin: 0 0 16px;
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.w3f__h3 {
  margin: 0 0 8px;
  font-size: 1.08rem;
  font-weight: 650;
  letter-spacing: -0.015em;
  color: var(--ink);
}

.w3f__body {
  margin: 0 0 12px;
  font-size: 1.02rem;
  line-height: 1.55;
  color: var(--ink-muted);
}

.w3f__body:last-child {
  margin-bottom: 0;
}

.w3f__features {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.w3f__feature {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 16px;
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
}

.w3f__feature-num {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--ink-faint);
  padding-top: 4px;
}

.w3f__steps {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.w3f__steps li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 1.02rem;
  line-height: 1.5;
  color: var(--ink-muted);
}

.w3f__step-num {
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

.w3f__channel-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.w3f__channel-link:hover {
  border-bottom-color: var(--ink);
}

.w3f__final {
  margin-top: 16px;
  padding-top: 40px;
  border-top: 1px solid var(--line);
}

.w3f__final .w3f__body {
  margin-bottom: 24px;
  max-width: 42ch;
}

@media (max-width: 768px) {
  .w3f {
    padding: 22px 16px 64px;
  }

  .w3f__back {
    margin-bottom: 24px;
  }

  .w3f__actions .btn,
  .w3f__final .btn {
    width: 100%;
  }

  .w3f__feature {
    grid-template-columns: 36px 1fr;
  }
}

/* Product detail visual system */
.w3f__inner {
  max-width: 1040px;
}

.w3f__hero {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(400px, 1.15fr);
  gap: clamp(38px, 7vw, 76px);
  align-items: center;
  margin-bottom: 72px;
  padding: 28px 0 64px;
  border-bottom: 1px solid var(--line);
}

.w3f__hero-copy {
  min-width: 0;
}

.w3f__brand {
  font-size: clamp(3rem, 7vw, 5.2rem);
  line-height: 0.94;
  letter-spacing: -0.06em;
}

.w3f__cover {
  position: relative;
  isolation: isolate;
  margin: 0;
  overflow: hidden;
  border-color: rgba(30, 112, 129, 0.26);
  border-radius: 22px;
  box-shadow:
    0 32px 86px rgba(13, 81, 94, 0.2),
    0 8px 24px rgba(13, 81, 94, 0.09);
  transition:
    transform 0.45s var(--ease),
    box-shadow 0.45s var(--ease);
}

.w3f__cover::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(125deg, rgba(96, 238, 227, 0.1), transparent 45%);
  pointer-events: none;
}

.w3f__cover:hover {
  transform: translateY(-8px) rotate(0.6deg);
  box-shadow:
    -10px 42px 96px rgba(13, 81, 94, 0.26),
    18px 10px 32px rgba(39, 184, 178, 0.12);
}

.w3f__cover img {
  transition: transform 0.55s var(--ease);
}

.w3f__cover:hover img {
  transform: scale(1.025);
}

.w3f__block {
  margin: 0;
  padding: 64px 0;
  border-top: 1px solid var(--line);
}

.w3f__h2 {
  margin-bottom: 22px;
  font-size: clamp(1.7rem, 4vw, 2.45rem);
  letter-spacing: -0.035em;
}

.w3f__block--about .w3f__body {
  max-width: 58ch;
  font-size: 1.08rem;
}

.w3f__features {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  border-top: 0;
}

.w3f__feature {
  min-height: 220px;
  display: block;
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.42);
  transition:
    transform 0.36s var(--ease),
    border-color 0.36s ease,
    box-shadow 0.36s ease;
}

.w3f__feature:hover {
  transform: translateY(-6px);
  border-color: rgba(22, 128, 140, 0.34);
  box-shadow: 0 22px 52px rgba(15, 105, 118, 0.12);
}

.w3f__feature-num {
  display: block;
  margin-bottom: 40px;
}

.w3f__block--how {
  display: grid;
  grid-template-columns: minmax(220px, 0.75fr) minmax(0, 1.25fr);
  gap: clamp(36px, 8vw, 92px);
}

.w3f__steps {
  gap: 0;
}

.w3f__steps li {
  padding: 20px 0;
  border-bottom: 1px solid var(--line);
}

.w3f__block--channel {
  margin: 36px 0;
  padding: clamp(40px, 6vw, 64px);
  overflow: hidden;
  border: none;
  border-radius: 22px;
  background:
    radial-gradient(circle at 90% 0%, rgba(52, 214, 204, 0.25), transparent 34%),
    #0b2830;
}

.w3f__block--channel .w3f__h2 {
  color: #eefcfb;
}

.w3f__block--channel .w3f__body {
  max-width: 48ch;
  color: rgba(238, 252, 251, 0.67);
}

.w3f__block--channel .w3f__channel-link {
  margin-top: 26px;
  padding: 14px 18px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  color: #eefcfb;
  transition:
    transform 0.3s var(--ease),
    background 0.3s ease;
}

.w3f__block--channel .w3f__channel-link:hover {
  border-bottom-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
}

.w3f__final {
  margin-top: 36px;
  padding: 64px 0 8px;
}

@media (max-width: 840px) {
  .w3f__hero {
    grid-template-columns: 1fr;
  }

  .w3f__cover {
    max-width: 720px;
  }
}

@media (max-width: 620px) {
  .w3f__hero {
    padding-top: 12px;
  }

  .w3f__features,
  .w3f__block--how {
    grid-template-columns: 1fr;
  }

  .w3f__block {
    padding: 48px 0;
  }

  .w3f__block--channel {
    margin-inline: -4px;
    padding: 38px 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .w3f__cover,
  .w3f__cover img,
  .w3f__feature,
  .w3f__channel-link {
    transition-duration: 0.01ms;
  }
}
</style>
