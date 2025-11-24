import { internationalizeConfig as configBase } from '@lib/config/locale/internationalize/internationalize.frontend';
import { locale } from 'expo-localization';
import { type Module } from 'i18next';

let internationalizeConfig = configBase;

internationalizeConfig = internationalizeConfig.extend(() => ({
  modules: [{ detect: () => locale, type: 'languageDetector' } as Module],
}));

export { internationalizeConfig };
