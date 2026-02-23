import 'server-only'
import type { Dictionary } from '@/types/i18n'

const dictionaries = {
  es: () => import('../dictionaries/es.json').then((module) => module.default as Dictionary),
  en: () => import('../dictionaries/en.json').then((module) => module.default as Dictionary),
}

export const getDictionary = async (locale: 'es' | 'en'): Promise<Dictionary> => {
  return dictionaries[locale]()
}
