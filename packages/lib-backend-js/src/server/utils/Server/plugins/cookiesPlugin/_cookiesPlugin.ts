import { fastifyCookie } from '@fastify/cookie';
import { type _CookiesPluginModel } from '@lib/backend/server/utils/Server/plugins/cookiesPlugin/_cookiesPlugin.models';

export const _cookiesPlugin: _CookiesPluginModel = async (server, { secret }) => {
  await server._app.register(fastifyCookie, { secret });
};
