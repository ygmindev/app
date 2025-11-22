import { type _InternationalizePluginModel } from '@lib/backend/server/utils/Server/plugins/internationalizePlugin/_internationalizePlugin.models';
import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { type FastifyPluginCallback, type FastifyRegisterOptions } from 'fastify';
import { plugin as i18nextMiddleware } from 'i18next-http-middleware';

export const _internationalizePlugin: _InternationalizePluginModel = async (server, { config }) => {
  await server._app.register(
    i18nextMiddleware as unknown as FastifyPluginCallback,
    { i18next: _internationalize(config) } as FastifyRegisterOptions<Record<never, never>>,
  );
};
