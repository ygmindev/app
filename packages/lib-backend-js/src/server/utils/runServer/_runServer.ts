import websocket from '@fastify/websocket';
import { useGraphQLSSE } from '@graphql-yoga/plugin-graphql-sse';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { formatGraphqlError } from '@lib/backend/http/utils/formatGraphqlError/formatGraphqlError';
import {
  type _RunServerModel,
  type _RunServerParamsModel,
} from '@lib/backend/server/utils/runServer/_runServer.models';
import { API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { _graphql } from '@lib/config/graphql/_graphql';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { handleHmr } from '@lib/shared/core/utils/handleHmr/handleHmr';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { HTTP_PROTOCOL } from '@lib/shared/http/http.constants';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  fastify,
  type FastifyReply,
  type FastifyRequest,
  type HTTPMethods,
  type RouteOptions,
} from 'fastify';
import { readFileSync } from 'fs';
import { type GraphQLError } from 'graphql';
import { makeHandler } from 'graphql-ws/use/@fastify/websocket';
import { createYoga } from 'graphql-yoga';
import toNumber from 'lodash/toNumber';

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
  });

  await app.register(websocket);

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

  api.routes.forEach(({ handler, method, pathname, protocol, schema, type }) => {
    const url = `/${joinPaths([api.prefix, pathname])}`;
    logger.info(
      `${isArray(method) ? method.join(',') : method} ${uri({ host: process.env.SERVER_APP_HOST, port: process.env.SERVER_APP_PORT })}${url}`,
    );

    const route: RouteOptions = {
      handler: async (req, reply) => {
        const { body, status } = handler
          ? await handler({ body: req.body })
          : { body: '', status: 200 };
        await reply.status(status ?? 200).send(body);
      },
      method: method as HTTPMethods,
      url,
    };

    if (type === API_ENDPOINT_TYPE.GRAPHQL) {
      const schemaF = schema && _graphql(schema);
      const yoga = createYoga<{ reply: FastifyReply; req: FastifyRequest }>({
        context: async ({ request }) => {
          const context: RequestContextModel = {};
          const access = request.headers.get('authorization');
          access && (context.token = { access });
          // TODO: delete token if expired token
          // request.headers.delete('authorization');
          return context;
        },
        landingPage: false,
        logging: logger,
        maskedErrors: {
          maskError(error, message, isDev) {
            return formatGraphqlError(error as GraphQLError);
          },
        },
        plugins: filterNil([protocol !== HTTP_PROTOCOL.WEBSOCKET && useGraphQLSSE]),
        schema: schemaF,
      });

      switch (protocol) {
        case HTTP_PROTOCOL.WEBSOCKET: {
          route.wsHandler = makeHandler({ schema: schemaF });
          break;
        }
        default: {
          route.handler = async (req, reply) => {
            const response = await yoga.handleNodeRequestAndResponse(req, reply, { reply, req });
            response.headers.forEach((value: unknown, key: string) => {
              void reply.header(key, value);
            });
            await reply.status(response.status ?? 200).send(response.body);
          };
          break;
        }
      }
    }

    app.register(async (fastify) => fastify.route(route));
  });

  try {
    await app.listen({ port: toNumber(port) });
  } catch (e) {
    logger.error(e);
  }

  return app;
};
