import { ref, computed, watch } from 'vue'
import type { Locale } from '../i18n'
import { messages } from '../i18n'

function readInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem('matrixon-lang')
    if (saved === 'en' || saved === 'ru') return saved
  } catch {
    /* private mode */
  }
  if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('en')) {
    return 'en'
  }
  return 'ru'
}

/** Shared across App (singleton module state) */
const locale = ref<Locale>(readInitialLocale())

export function useSiteLocale() {
  const t = computed(() => messages[locale.value])

  watch(
    locale,
    (v) => {
      try {
        localStorage.setItem('matrixon-lang', v)
      } catch {
        /* ignore */
      }
      document.documentElement.lang = v === 'ru' ? 'ru' : 'en'
    },
    { immediate: true },
  )

  function setLocale(next: Locale) {
    locale.value = next
  }

  return { locale, t, setLocale }
}
