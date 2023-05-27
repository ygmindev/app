import type {
  _InternationalizeConfigModel,
  InternationalizeConfigModel,
} from '@lib/config/locale/internationalize/internationalize.models';
import type { ReturnTypeModel } from '@lib/shared/core/core.models';
import i18next, { init, use } from 'i18next';

export const _internationalize = ({
  addPath,
  caches,
  filename,
  isPreload,
  isReact,
  isSuspense,
  key,
  languageDefault,
  languages,
  loadPath,
  modules,
  namespaceDefault,
}: InternationalizeConfigModel): ReturnTypeModel<_InternationalizeConfigModel> => {
  modules?.forEach(use);

  !i18next.isInitialized &&
    init({
      debug: false,

      defaultNS: [namespaceDefault],

      detection: {
        caches,
        cookieOptions: { path: '/', sameSite: true },
        lookupCookie: key,
        lookupFromSubdomainIndex: 0,
        lookupLocalStorage: key,
        order: caches,
      },

      fallbackLng: languageDefault,

      initImmediate: !isPreload,

      interpolation: { escapeValue: false },

      lng: languageDefault,

      ns: [],

      preload: isPreload ? languages : false,

      supportedLngs: languages,

      ...(isReact ? { react: { defaultTransParent: 'div', useSuspense: isSuspense } } : {}),

      ...(addPath ? { backend: { addPath: `${addPath}/${filename}` } } : {}),

      ...(loadPath ? { backend: { loadPath: `${loadPath}/${filename}` } } : {}),
    });

  return i18next;
};
