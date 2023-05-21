import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import type {
  _InternationalizeConfigModel,
  InternationalizeConfigModel,
} from '@lib/config/locale/internationalize/_internationalize.models';
import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import i18next, { init, use } from 'i18next';

const _internationalizeConfig: _InternationalizeConfigModel = async () => {
  const {
    addPath,
    caches,
    filename,
    isPreload,
    isReact,
    key,
    languageDefault,
    languages,
    loadPath,
    modules,
    namespaceDefault,
  } = await importConfig<InternationalizeConfigModel>('locale/internationalize/internationalize');

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

      ...(isReact ? { react: { defaultTransParent: 'div', useSuspense: true } } : {}),

      ...(addPath ? { backend: { addPath: `${addPath}/${filename}` } } : {}),

      ...(loadPath ? { backend: { loadPath: `${loadPath}/${filename}` } } : {}),
    });

  return i18next;
};

export default _internationalizeConfig;
