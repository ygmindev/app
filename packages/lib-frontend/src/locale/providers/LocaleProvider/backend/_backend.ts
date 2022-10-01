import { APP_URI } from '@lib/frontend/http/http.constants';
import type { BackendOptions } from 'i18next-http-backend';

export { default as _Backend } from 'i18next-http-backend';

export const _backend: BackendOptions = {
  loadPath: `${APP_URI}/assets/locales/{{lng}}/{{ns}}.json`,
};
