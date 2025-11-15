import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { cookiesPlugin } from '@lib/backend/server/utils/Server/plugins/cookiesPlugin/cookiesPlugin';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { websocketPlugin } from '@lib/backend/server/utils/Server/plugins/websocketPlugin/websocketPlugin';
import { config as configBase } from '@lib/config/node/server/server.base';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const config = defineConfig<ServerConfigModel>({
  ...configBase,

  overrides: () => {
    const environment = Container.get(Environment);
    return [
      {
        plugins: [
          [cookiesPlugin, { secret: environment.variables.SERVER_APP_SECRET }],

          [websocketPlugin, {}],
        ] as Array<[ServerPluginModel<unknown>, unknown]>,
      },
    ];
  },
});
