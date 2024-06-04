import { getUserFromHeader } from '@lib/backend/auth/utils/getUserFromHeader/getUserFromHeader';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import {
  type _RunServerModel,
  type _RunServerParamsModel,
} from '@lib/backend/server/utils/runServer/_runServer.models';
import { API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { type RequestContextModel } from '@lib/config/api/api.models';
import graphqlConfig from '@lib/config/graphql/graphql';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { handleHmr } from '@lib/shared/core/utils/handleHmr/handleHmr';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { fastify, type HTTPMethods } from 'fastify';
import { readFileSync } from 'fs';
import { createYoga } from 'graphql-yoga';
import isArray from 'lodash/isArray';
import toNumber from 'lodash/toNumber';

class _Logger {
  child = (..._: Array<unknown>): unknown => new _Logger();
  fatal = (..._: Array<unknown>): unknown => null;
  level = 'info';
  error = logger.error;
  warn = logger.warn;
  info = logger.info;
  debug = logger.debug;
  trace = (..._: Array<unknown>): unknown => null;
  silent = (..._: Array<unknown>): unknown => null;
}

export const _runServer = async ({
  api,
  certificate,
  onClose,
  onInitialize,
  port,
}: _RunServerParamsModel): Promise<_RunServerModel> => {
  await onInitialize();

  const { certificateDir, privateKeyFilename, publicKeyFilename } = certificate;
  const app = fastify({
    disableRequestLogging: true,
    https: {
      cert: readFileSync(joinPaths([certificateDir, publicKeyFilename])),
      key: readFileSync(joinPaths([certificateDir, privateKeyFilename])),
    },
    logger: new _Logger(),
  });

  const handleClose = async (): Promise<void> => {
    app.server.listening && (await app.close());
  };

  handleHmr({ onChange: handleClose });
  await handleCleanup({
    onCleanup: async () => {
      await onClose();
      await handleClose();
    },
  });

  api.routes.forEach(({ handler, method, pathname, type }) => {
    const url = `/${joinPaths([api.prefix, pathname])}`;
    logger.info(
      `${isArray(method) ? method.join(',') : method} ${uri({ host: process.env.SERVER_APP_HOST, port: process.env.SERVER_APP_PORT })}${url}`,
    );
    switch (type) {
      case API_ENDPOINT_TYPE.GRAPHQL: {
        const schema = graphqlConfig.config();
        const yoga = createYoga({
          context: async ({ request }) => {
            const context: RequestContextModel = {};
            const user = await getUserFromHeader(request.headers.get('authorization') ?? undefined);
            user && (context.user = user);
            return context;
          },
          logging: logger,
          schema,
        });

        app.route({
          handler: async (req, reply) => {
            const response = await yoga.handleNodeRequestAndResponse(req, reply, { reply, req });
            response.headers.forEach((value: unknown, key: string) => {
              void reply.header(key, value);
            });
            await reply.status(response.status ?? 200).send(response.body);
          },
          method: method as HTTPMethods,
          url,
        });
        break;
      }
      default: {
        app.route({
          handler: async (req, reply) => {
            const { body, status } = await handler({ body: req.body });
            await reply.status(status ?? 200).send(body);
          },
          // TODO: handle websocket
          method: method as HTTPMethods,
          url,
        });
        break;
      }
    }
  });

  try {
    await app.listen({ port: toNumber(port) });
  } catch (e) {
    logger.error(e);
  }
};
