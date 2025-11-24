import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { websocketPlugin } from '@lib/backend/server/utils/Server/plugins/websocketPlugin/websocketPlugin';
import { serverConfig as configBase } from '@lib/config/node/server/server.base';
import { Container } from '@lib/shared/core/utils/Container/Container';
import toNumber from 'lodash/toNumber';

let serverConfig = configBase;

serverConfig = serverConfig.extend(() => {
  const environment = Container.get(Environment);
  return {
    plugins: [[websocketPlugin, {}]] as Array<[ServerPluginModel<unknown>, unknown]>,

    port: toNumber(environment.variables.SERVER_APP_PORT),
  };
});

export { serverConfig };
