import type { i18n, InitOptions } from 'i18next';
import { createInstance } from 'i18next';

import type {
  _InternationalizeConfigModel,
  InternationalizeConfigModel,
} from '#lib-config/locale/internationalize/internationalize.models';
import type { ReturnTypeModel } from '#lib-shared/core/core.models';

let instanceGlobal: i18n;

export const _internationalize = ({
  addPath,
  caches,
  filename,
  isPreload,
  isReact,
  isSuspense,
  key,
  language,
  languageDefault,
  languages,
  loadPath,
  modules,
  namespaceDefault,
}: InternationalizeConfigModel): ReturnTypeModel<_InternationalizeConfigModel> => {
  const config: InitOptions = {
    debug: false,

    defaultNS: [namespaceDefault],

    detection: {
      caches,
      cookieOptions: { path: '/', sameSite: true },
      lookupCookie: key,
    },

    fallbackLng: languageDefault,

    initImmediate: !isPreload,

    interpolation: { escapeValue: false },

    lng: language || languageDefault,

    ns: [],

    preload: isPreload ? languages : false,

    supportedLngs: languages,

    ...(isReact ? { react: { defaultTransParent: 'div', useSuspense: isSuspense } } : {}),

    ...(addPath ? { backend: { addPath: `${addPath}/${filename}` } } : {}),

    ...(loadPath ? { backend: { loadPath: `${loadPath}/${filename}` } } : {}),
  };

  let instance: i18n;
  if (instanceGlobal) {
    instance = instanceGlobal.cloneInstance({ ...config, initImmediate: false });
  } else {
    instance = instanceGlobal = createInstance(config);
  }

  if (!instance.isInitialized) {
    modules?.forEach(instance.use);
    instance.init(config);
  }

  return instance;
};
