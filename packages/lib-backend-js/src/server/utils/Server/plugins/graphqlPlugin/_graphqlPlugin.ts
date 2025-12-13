import { useGraphQLSSE } from '@graphql-yoga/plugin-graphql-sse';
import { formatGraphqlError } from '@lib/backend/http/utils/formatGraphqlError/formatGraphqlError';
import { HttpResponse } from '@lib/backend/http/utils/HttpResponse/HttpResponse';
import { type _GraphqlPluginModel } from '@lib/backend/server/utils/Server/plugins/graphqlPlugin/_graphqlPlugin.models';
import { API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { _graphql } from '@lib/config/graphql/_graphql';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { HTTP_METHOD, HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { type FastifyReply, type FastifyRequest } from 'fastify';
import { type GraphQLError } from 'graphql';
import { createYoga } from 'graphql-yoga';

export const _graphqlPlugin: _GraphqlPluginModel = async (server, { config, logger, pathname }) => {
  try {
    const schema = _graphql(config);
    const yoga = createYoga<{ reply: FastifyReply; req: FastifyRequest }>({
      context: async ({ request }) => {
        const context: RequestContextModel = {};
        const access = request.headers.get('authorization');
        access && (context.token = { access });
        // TODO: delete token if expired token
        // request.headers.delete('authorization');
        return context;
      },
      graphiql: {
        subscriptionsProtocol: 'WS',
      },
      landingPage: false,
      logging: logger ? { ...logger, debug: () => ({}) } : undefined,
      maskedErrors: {
        maskError(error, message, isDev) {
          return formatGraphqlError(error as GraphQLError);
        },
      },
      // plugins: filterNil([protocol !== HTTP_PROTOCOL.WEBSOCKET && useGraphQLSSE]),
      plugins: [
        useGraphQLSSE(),

        {
          onRequest: async ({ request }) => {
            const { method, url } = request;
            logger?.info(`[GraphQL] ${method} ${url}`);
          },
        },
      ],
      schema,
    });

    await server.register({
      handler: async (_request, _context, params) => {
        if (params) {
          const response = await yoga.handleNodeRequestAndResponse(params.req, params.rep, {
            reply: params.rep,
            req: params.req,
          });
          return new HttpResponse({
            body: response.body,
            headers: Object.fromEntries(response.headers.entries()),
            statusCode: response.status ?? HTTP_STATUS_CODE.OK,
          });
        }
        throw new NotFoundError('no params');
      },
      method: [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.OPTIONS],
      pathname,
      prefix: true,
      type: API_ENDPOINT_TYPE.REST,
    });
  } catch (e) {
    console.warn(e);
  }
};
