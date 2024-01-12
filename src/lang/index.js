import { createI18n } from "vue-i18n";
import zh from '../lang/zh';
import en from '../lang/en';

const messages = {
    en,
    zh
}

let lang = "zh";

const i18n = new createI18n({
    globalInjection: true,
    locale: lang,
    messages
})

export default i18n
