import { APP_URI } from '@lib/frontend/http/http.constants';
import type { HttpBackendOptions } from 'i18next-http-backend';

export { default as _Backend } from 'i18next-http-backend';

export const _backend: HttpBackendOptions = {
  loadPath: `${APP_URI}/assets/locales/{{lng}}/{{ns}}.json`,
};
