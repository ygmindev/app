import {
  type _InternationalizeConfigModel,
  type InternationalizeConfigModel,
} from '@lib/config/locale/internationalize/internationalize.models';
import { type I18nModel } from '@lib/shared/locale/locale.models';
import { type i18n, type InitOptions } from 'i18next';
import { createInstance } from 'i18next';

let instanceGlobal: i18n;

export const _internationalize = ({
  isDebug,
  isPreload,
  language,
  languageDefault,
  languages,
  localePath,
  modules,
}: InternationalizeConfigModel): _InternationalizeConfigModel => {
  const languageF = language ?? languageDefault;

  const config: InitOptions = {
    // debug: isDebug,
    debug: false,

    defaultNS: false,

    fallbackLng: languageDefault,

    initAsync: !isPreload,

    interpolation: { escapeValue: false },

    lng: language,

    load: 'languageOnly',

    ns: [],

    partialBundledLanguages: !isPreload,

    preload: isPreload ? [languageF] : false,

    react: {
      bindI18n: 'languageChanged loaded',
      defaultTransParent: 'div',
      useSuspense: isPreload,
    },

    supportedLngs: languages.map(({ id }) => id),
  };

  if (localePath) {
    const pathF = `${localePath}/locales/{{lng}}/{{ns}}.json`;
    config.backend = { addPath: pathF, loadPath: pathF };
  }

  let instance: i18n;
  if (instanceGlobal) {
    instance = instanceGlobal.cloneInstance({
      ...config,
      forkResourceStore: true,
      initImmediate: false,
    });
  } else {
    instance = instanceGlobal = createInstance(config);
  }

  if (!instance.isInitialized) {
    modules?.forEach((m) => (instance = instance.use(m)));
    void instance.init(config);
  }

  return instance as I18nModel;
};
