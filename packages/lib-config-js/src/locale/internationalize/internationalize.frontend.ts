import { ASSETS_DIR } from '@lib/config/file/file.constants';
import { internationalizeConfig as configBase } from '@lib/config/locale/internationalize/internationalize.base';
import { STATIC_URI } from '@lib/shared/http/http.constants';

let internationalizeConfig = configBase;

internationalizeConfig = internationalizeConfig.extend(() => ({
  isPreload: false,

  localePath: `${STATIC_URI}/${ASSETS_DIR}`,
}));

export { internationalizeConfig };
