import { createI18n } from "vue-i18n"
import { esES } from './locales/es-ES'
import { enUS } from './locales/en-US'

type MessageSchema = typeof esES

export const i18n = createI18n<[MessageSchema], 'es-ES' | 'en-US'>({
    locale: 'es-ES',
    messages: {
        'es-ES': esES,
        'en-US': enUS,
    }
})
