import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { serverConfig as configBase } from '@lib/config/node/server/server.web';

export const serverConfig = configBase.extend(() => ({
  plugins: [] as Array<[ServerPluginModel<unknown>, unknown]>,
}));
