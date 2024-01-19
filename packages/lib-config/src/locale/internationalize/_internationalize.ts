import {
  type _InternationalizeConfigModel,
  type InternationalizeConfigModel,
} from '@lib/config/locale/internationalize/internationalize.models';
import { type i18n, type InitOptions } from 'i18next';
import { createInstance } from 'i18next';

let instanceGlobal: i18n;

export const _internationalize = ({
  isPreload,
  language,
  languageDefault,
  languages,
  modules,
  path,
}: InternationalizeConfigModel): _InternationalizeConfigModel => {
  const languageF = language ?? languageDefault;

  const config: InitOptions = {
    debug: false,

    defaultNS: false,

    fallbackLng: languageDefault,

    initImmediate: !isPreload,

    interpolation: { escapeValue: false },

    lng: language,

    ns: [],

    preload: isPreload ? [languageF] : false,

    react: { defaultTransParent: 'div', useSuspense: true },

    supportedLngs: languages.map(({ id }) => id),
  };

  if (path) {
    const pathF = `${path}/locales/{{lng}}/{{ns}}.json`;
    config.backend = { addPath: pathF, loadPath: pathF };
  }

  let instance: i18n;
  if (instanceGlobal) {
    instance = instanceGlobal.cloneInstance({ ...config, initImmediate: false });
  } else {
    instance = instanceGlobal = createInstance(config);
  }

  if (!instance.isInitialized) {
    modules?.forEach(instance.use);
    void instance.init(config);
  }

  return instance;
};
