import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import es from './locales/es/translation.json'

function getLangFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search)
    const lng = params.get('lng')
    return lng
  } catch (e) {
    return null
  }
}

const initialLng = getLangFromUrl() || 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: initialLng,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

// Keep URL in sync when language changes (no reload).
i18n.on('languageChanged', (lng) => {
  try {
    const params = new URLSearchParams(window.location.search)
    params.set('lng', lng)
    const newSearch = params.toString()
    const newUrl = window.location.pathname + (newSearch ? `?${newSearch}` : '') + window.location.hash
    window.history.replaceState({}, '', newUrl)
  } catch (e) {
    // ignore
  }
})

export default i18n
