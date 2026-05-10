<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSiteLocale } from '../composables/useSiteLocale'

const { t } = useSiteLocale()

const features = [
  { titleKey: 'colearnF1Title' as const, textKey: 'colearnF1Text' as const },
  { titleKey: 'colearnF2Title' as const, textKey: 'colearnF2Text' as const },
  { titleKey: 'colearnF3Title' as const, textKey: 'colearnF3Text' as const },
  { titleKey: 'colearnF4Title' as const, textKey: 'colearnF4Text' as const },
]
</script>

<template>
  <main class="colearn">
    <div class="colearn__mesh" aria-hidden="true" />
    <div class="colearn__inner">
      <RouterLink class="colearn__back" to="/">{{ t.colearnBack }}</RouterLink>

      <header class="colearn__hero">
        <p class="colearn__eyebrow">MATRIXON · EdTech</p>
        <h1 class="colearn__title">CoLearn</h1>
        <p class="colearn__tagline">{{ t.colearnTagline }}</p>
      </header>

      <section class="colearn__vision" aria-labelledby="vision-heading">
        <h2 id="vision-heading" class="colearn__h2">{{ t.colearnVisionTitle }}</h2>
        <p class="colearn__lead">{{ t.colearnVisionLead }}</p>
        <p class="colearn__body">{{ t.colearnVisionBody }}</p>
      </section>

      <section class="colearn__grid-wrap" aria-label="CoLearn">
        <div class="colearn__grid">
          <article v-for="(f, i) in features" :key="i" class="colearn__card">
            <div class="colearn__card-dot" aria-hidden="true" />
            <h3 class="colearn__h3">{{ t[f.titleKey] }}</h3>
            <p class="colearn__card-text">{{ t[f.textKey] }}</p>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.colearn {
  position: relative;
  z-index: 1;
  min-height: min(100vh, 1200px);
  padding: 32px 24px 96px;
}

.colearn__mesh {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.5;
  background-image:
    radial-gradient(circle at 30% 20%, rgba(26, 74, 158, 0.1) 0%, transparent 45%),
    radial-gradient(circle at 80% 60%, rgba(60, 192, 180, 0.08) 0%, transparent 40%);
  mask-image: radial-gradient(ellipse 70% 70% at 50% 30%, #000 0%, transparent 75%);
}

.colearn__inner {
  position: relative;
  z-index: 1;
  max-width: 880px;
  margin: 0 auto;
}

.colearn__back {
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

.colearn__back:hover {
  border-bottom-color: var(--m-navy);
  transform: translateX(-3px);
}

.colearn__hero {
  margin-bottom: 56px;
}

.colearn__eyebrow {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--m-blue);
}

.colearn__title {
  margin: 0 0 16px;
  font-size: clamp(2.5rem, 8vw, 3.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.colearn__tagline {
  margin: 0;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: var(--text-muted);
  max-width: 560px;
}

.colearn__vision {
  margin-bottom: 48px;
  padding: 32px 28px;
  background: var(--surface-soft);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  transition:
    box-shadow 0.35s ease,
    border-color 0.3s ease;
}

.colearn__vision:hover {
  box-shadow: 0 18px 44px rgba(26, 74, 158, 0.07);
  border-color: rgba(26, 74, 158, 0.1);
}

.colearn__h2 {
  margin: 0 0 16px;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.colearn__lead {
  margin: 0 0 12px;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1.45;
}

.colearn__body {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.colearn__grid {
  display: grid;
  gap: 18px;
}

@media (min-width: 640px) {
  .colearn__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .colearn {
    padding: 22px 16px 64px;
  }

  .colearn__back {
    margin-bottom: 24px;
    font-size: 14px;
  }

  .colearn__hero {
    margin-bottom: 34px;
  }

  .colearn__tagline {
    font-size: 1rem;
  }

  .colearn__vision {
    margin-bottom: 28px;
    padding: 22px 16px;
    border-radius: 20px;
  }

  .colearn__lead {
    font-size: 1.02rem;
  }

  .colearn__body {
    font-size: 0.98rem;
  }
}

@media (max-width: 480px) {
  .colearn {
    padding: 16px 14px 50px;
  }

  .colearn__eyebrow {
    font-size: 11px;
    letter-spacing: 0.11em;
  }

  .colearn__title {
    margin-bottom: 12px;
    font-size: clamp(2rem, 13vw, 2.5rem);
  }

  .colearn__grid {
    gap: 12px;
  }

  .colearn__card {
    padding: 18px 16px;
  }

  .colearn__h3 {
    font-size: 1rem;
  }

  .colearn__card-text {
    font-size: 14px;
    line-height: 1.5;
  }
}

.colearn__card {
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

.colearn__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(26, 74, 158, 0.09);
  border-color: rgba(26, 74, 158, 0.12);
}

.colearn__card-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gradient);
  margin-bottom: 14px;
}

.colearn__h3 {
  margin: 0 0 10px;
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.colearn__card-text {
  margin: 0;
  font-size: 15px;
  line-height: 1.55;
  color: var(--text-muted);
}

@media (prefers-reduced-motion: reduce) {
  .colearn__back,
  .colearn__vision,
  .colearn__card {
    transition-duration: 0.01ms;
  }

  .colearn__back:hover,
  .colearn__card:hover {
    transform: none;
  }
}
</style>
