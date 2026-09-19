import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useFullPageSlides(
  containerRef: Ref<HTMLElement | null>,
  slideCount: number,
) {
  const activeSlide = ref(0)
  let observer: IntersectionObserver | null = null

  function scrollToSlide(index: number) {
    const container = containerRef.value
    if (!container) return
    const clamped = Math.max(0, Math.min(slideCount - 1, index))
    const slide = container.querySelector<HTMLElement>(`[data-slide="${clamped}"]`)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    slide?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    activeSlide.value = clamped
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault()
      scrollToSlide(activeSlide.value + 1)
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault()
      scrollToSlide(activeSlide.value - 1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      scrollToSlide(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      scrollToSlide(slideCount - 1)
    }
  }

  onMounted(() => {
    const container = containerRef.value
    if (!container) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!reduced && window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('keydown', onKeydown)
    }

    const slides = container.querySelectorAll<HTMLElement>('[data-slide]')
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.45) return
          const idx = Number((entry.target as HTMLElement).dataset.slide)
          if (!Number.isNaN(idx)) activeSlide.value = idx
        })
      },
      { root: container, threshold: [0.45, 0.6, 0.75] },
    )
    slides.forEach((el) => observer!.observe(el))

    const hash = window.location.hash.replace('#', '')
    const hashMap: Record<string, number> = {
      intro: 0,
      product: 1,
      build: 2,
      partners: 3,
      team: 4,
      contact: 5,
      vectors: 1,
      founder: 4,
    }
    if (hash && hash in hashMap) {
      requestAnimationFrame(() => scrollToSlide(hashMap[hash]))
    }
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
    observer?.disconnect()
  })

  return { activeSlide, scrollToSlide, totalSlides: slideCount }
}
