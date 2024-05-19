import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import {
  type _ServerModel,
  type _ServerParamsModel,
} from '@lib/backend/server/utils/server/_server.models';
import { API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { _config as graphQlConfig } from '@lib/config/data/graphql/graphql';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { handleHmr } from '@lib/shared/core/utils/handleHmr/handleHmr';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { debug, error, info, warn } from '@lib/shared/logging/utils/logger/logger';
import { fastify, type HTTPMethods } from 'fastify';
import { readFileSync } from 'fs';
import { createYoga } from 'graphql-yoga';
import isArray from 'lodash/isArray';

class _Logger {
  child = (..._: Array<unknown>): unknown => new _Logger();
  fatal = (..._: Array<unknown>): unknown => null;
  level = 'info';
  error = error;
  warn = warn;
  info = info;
  debug = debug;
  trace = (..._: Array<unknown>): unknown => null;
  silent = (..._: Array<unknown>): unknown => null;
}

export const _server = async ({
  api,
  certificate,
  onClose,
  port,
}: _ServerParamsModel): Promise<_ServerModel> => {
  const { certificateDir, privateKeyFile, publicKeyFile } = certificate;
  const app = fastify({
    disableRequestLogging: true,
    https: {
      cert: readFileSync(joinPaths([certificateDir, publicKeyFile])),
      key: readFileSync(joinPaths([certificateDir, privateKeyFile])),
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
    info(
      `${isArray(method) ? method.join(',') : method} ${uri({ host: process.env.SERVER_APP_HOST, port: process.env.SERVER_APP_PORT })}${url}`,
    );
    switch (type) {
      case API_ENDPOINT_TYPE.GRAPHQL: {
        const schema = graphQlConfig();
        const yoga = createYoga({ logging: { debug, error, info, warn }, schema });
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
    await app.listen({ port });
  } catch (e) {
    error(e);
  }
};
