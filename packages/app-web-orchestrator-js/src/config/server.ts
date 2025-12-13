import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { serverConfig as configBase } from '@lib/config/node/server/server.web';

import { databaseConfig } from './database';

let serverConfig = configBase;

serverConfig = serverConfig.extend(() => ({
  database: databaseConfig.params(),

  plugins: [] as Array<[ServerPluginModel<unknown>, unknown]>,
}));

export { serverConfig };
