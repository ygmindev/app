import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromPublic } from '@lib/backend/file/utils/fromPublic/fromPublic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { compressPlugin } from '@lib/backend/server/utils/Server/plugins/compressPlugin/compressPlugin';
import { internationalizePlugin } from '@lib/backend/server/utils/Server/plugins/internationalizePlugin/internationalizePlugin';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { staticPlugin } from '@lib/backend/server/utils/Server/plugins/staticPlugin/staticPlugin';
import { webPlugin } from '@lib/backend/server/utils/Server/plugins/webPlugin/webPlugin';
import { ASSETS_DIR } from '@lib/config/file/file.constants';
import { internationalizeConfig } from '@lib/config/locale/internationalize/internationalize.node';
import { bundleConfig } from '@lib/config/node/bundle/bundle.web';
import { serverConfig as configBase } from '@lib/config/node/server/server.base';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const serverConfig = configBase.extend(() => {
  const environment = Container.get(Environment);
  return {
    host: environment.variables.APP_HOST,

    plugins: [
      [compressPlugin, {}],

      [staticPlugin, { prefix: ASSETS_DIR, root: fromPublic() }],

      [internationalizePlugin, { config: internationalizeConfig.params() }],

      [
        webPlugin,
        {
          config: bundleConfig.params(),
          root: fromWorking(),
        },
      ],
    ] as Array<[ServerPluginModel<unknown>, unknown]>,
  };
});
