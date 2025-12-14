import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { serverConfig as configBase } from '@lib/config/node/server/server.web';

let serverConfig = configBase;

serverConfig = serverConfig.extend(() => ({
  plugins: [] as Array<[ServerPluginModel<unknown>, unknown]>,
}));

export { serverConfig };
