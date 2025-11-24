import { internationalizeConfig as configBase } from '@lib/config/locale/internationalize/internationalize.frontend';
import HttpBackend from 'i18next-http-backend';

let internationalizeConfig = configBase;

internationalizeConfig = internationalizeConfig.extend(() => ({
  modules: [HttpBackend],
}));

export { internationalizeConfig };
