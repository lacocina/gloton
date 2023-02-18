import { createI18n } from "vue-i18n"
import { langEs } from './locales/es'
import { langEn } from './locales/en'

type MessageSchema = typeof langEs

export const i18n = createI18n<[MessageSchema, 'langEs' | 'langEn']>({
    locale: 'langEs',
})
