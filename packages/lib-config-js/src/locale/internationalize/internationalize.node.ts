import { fromPublic } from '@lib/backend/file/utils/fromPublic/fromPublic';
import { ASSETS_DIR } from '@lib/config/file/file.constants';
import { internationalizeConfig as configBase } from '@lib/config/locale/internationalize/internationalize.frontend';
import FsBackend from 'i18next-fs-backend';

let internationalizeConfig = configBase;

internationalizeConfig = internationalizeConfig.extend(() => ({
  isPreload: true,

  localePath: fromPublic(ASSETS_DIR),

  modules: [FsBackend],
}));

export { internationalizeConfig };
