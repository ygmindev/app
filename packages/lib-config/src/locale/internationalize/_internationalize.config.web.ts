import { _internationalizeConfig as _internationalizeConfigFrontend } from '@lib/config/locale/internationalize/_internationalize.config.frontend';
import type { _InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { APP_URI } from '@lib/frontend/http/http.constants';
import type { i18n } from 'i18next';
import { use } from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';

export const _internationalizeConfig = (params: _InternationalizeConfigParamsModel): i18n => {
  use(I18NextHttpBackend).use(I18nextBrowserLanguageDetector);

  return _internationalizeConfigFrontend({
    ...params,

    backend: {
      loadPath: `${APP_URI}${params.path}`,
    },

    detection: {
      caches: ['localStorage', 'cookie'],
      cookieOptions: { path: '/', sameSite: true },
      lookupCookie: params.key,
      lookupFromSubdomainIndex: 0,
      lookupLocalStorage: params.key,
      order: ['cookie', 'localStorage', 'subdomain'],
    },
  });
};
