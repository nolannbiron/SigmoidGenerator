import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import i18nEnglish from './translations/en.json'
import i18nFrench from './translations/fr.json'
import common from './translations/common.json'

//available languages
export const countries = {
    'en-US': { language: 'en', region: 'US', translation: { ...common, ...i18nEnglish } },
    'fr-FR': { language: 'fr', region: 'FR', translation: { ...common, ...i18nFrench } },
} as const

export type AvailableCountryCode = keyof typeof countries
export type AvailableRegion = typeof countries[AvailableCountryCode]['region']
export type AvailableLanguage = typeof countries[AvailableCountryCode]['language']

export const defaultCountryCode: AvailableCountryCode = 'fr-FR'

export const availableCountryCodes = Object.keys(countries) as AvailableCountryCode[]
export const availableLanguages = Object.values(countries).map((country) => country.language)
export const availableRegions = Object.values(countries).map((country) => country.region)

const translationResources: Resource = Object.values(countries).reduce(
    (acc, country) => ({ ...acc, [country.language]: { translation: country.translation } }),
    {}
)

// initialize i18next
i18n.use(initReactI18next).init({
    resources: translationResources,
    lng: countries[defaultCountryCode].language,
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
})

export default i18n
