import { fromPublic } from '@lib/backend/file/utils/fromPublic/fromPublic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { compressPlugin } from '@lib/backend/server/utils/Server/plugins/compressPlugin/compressPlugin';
import { cookiesPlugin } from '@lib/backend/server/utils/Server/plugins/cookiesPlugin/cookiesPlugin';
import { internationalizePlugin } from '@lib/backend/server/utils/Server/plugins/internationalizePlugin/internationalizePlugin';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { staticPlugin } from '@lib/backend/server/utils/Server/plugins/staticPlugin/staticPlugin';
import { webPlugin } from '@lib/backend/server/utils/Server/plugins/webPlugin/webPlugin';
import { config as apiConfig } from '@lib/config/api/api.node';
import { ASSETS_DIR } from '@lib/config/file/file.constants';
import { config as internationalizeConfig } from '@lib/config/locale/internationalize/internationalize';
import { config as configBase } from '@lib/config/node/server/server.base';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { config as webConfig } from '@lib/config/node/web/web';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import toNumber from 'lodash/toNumber';

export const config = defineConfig<ServerConfigModel>({
  ...configBase,

  overrides: () => [
    {
      api: apiConfig.params(),

      host: process.env.APP_HOST,

      plugins: [
        [compressPlugin, {}],

        [staticPlugin, { prefix: ASSETS_DIR, root: fromPublic() }],

        [cookiesPlugin, { secret: process.env.SERVER_APP_SECRET }],

        [internationalizePlugin, { config: internationalizeConfig.params() }],

        [webPlugin, { config: webConfig.params(), root: fromWorking() }],
      ] as Array<[ServerPluginModel<unknown>, unknown]>,

      port: toNumber(process.env.APP_PORT),
    },
  ],
});

export default config;
