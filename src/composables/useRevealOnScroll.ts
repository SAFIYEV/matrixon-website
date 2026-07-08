import { onMounted, onUnmounted } from 'vue'

export function useRevealOnScroll() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const items = document.querySelectorAll('.reveal')
    if (!items.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -32px 0px' },
    )

    items.forEach((el) => observer!.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
