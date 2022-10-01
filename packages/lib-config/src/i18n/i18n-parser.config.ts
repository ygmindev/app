import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { i18nConfig } from '@lib/config/i18n/i18n.config';
import { CORE } from '@lib/shared/core/core.constants';

export const i18nParserConfig = {
  createOldCatalogs: false,
  defaultNamespace: CORE,
  defaultValue: 'TRANSLATION_MISSING',
  locales: i18nConfig.supportedLngs,
  output: fromStatic('assets/locales/$LOCALE/$NAMESPACE.json'),
  sort: true,
  verbose: true,
};
