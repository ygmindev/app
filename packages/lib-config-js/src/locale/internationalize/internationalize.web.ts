import { internationalizeConfig as configBase } from '@lib/config/locale/internationalize/internationalize.frontend';
import HttpBackend from 'i18next-http-backend';

export const internationalizeConfig = configBase.extend(() => ({
  modules: [HttpBackend],
}));
