import { ref } from 'vue'

export type DeckHeaderTone = 'dark' | 'light'

const deckHeaderTone = ref<DeckHeaderTone>('dark')

export function useDeckHeader() {
  function setDeckHeaderTone(tone: DeckHeaderTone) {
    deckHeaderTone.value = tone
  }

  return { deckHeaderTone, setDeckHeaderTone }
}
