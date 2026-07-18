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
      </header>

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

      <section class="w3f__block" aria-labelledby="w3f-about">
        <h2 id="w3f-about" class="w3f__h2">{{ t.web3FrenAboutTitle }}</h2>
        <p class="w3f__body">{{ t.web3FrenAboutText }}</p>
        <p class="w3f__body">{{ t.web3FrenAboutText2 }}</p>
      </section>

      <section class="w3f__block" aria-labelledby="w3f-features">
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

      <section class="w3f__block" aria-labelledby="w3f-how">
        <h2 id="w3f-how" class="w3f__h2">{{ t.web3FrenHowTitle }}</h2>
        <ol class="w3f__steps">
          <li v-for="(step, i) in howSteps" :key="i">
            <span class="w3f__step-num">{{ i + 1 }}</span>
            <span>{{ step }}</span>
          </li>
        </ol>
      </section>

      <section class="w3f__block" aria-labelledby="w3f-channel">
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
</style>
