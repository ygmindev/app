import { formatGraphqlError } from '@lib/backend/http/utils/formatGraphqlError/formatGraphqlError';
import { type GraphqlPluginModel } from '@lib/backend/server/utils/Server/plugins/graphqlPlugin/graphqlPlugin.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { _graphql } from '@lib/config/graphql/_graphql';
import { type FastifyReply, type FastifyRequest } from 'fastify';
import { type GraphQLError } from 'graphql';
import { createYoga } from 'graphql-yoga';
// import { useGraphQLSSE } from '@graphql-yoga/plugin-graphql-sse';

export const graphqlPlugin: GraphqlPluginModel = async (app, { config, logger }) => {
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
      landingPage: false,
      logging: logger,
      maskedErrors: {
        maskError(error, message, isDev) {
          return formatGraphqlError(error as GraphQLError);
        },
      },
      // plugins: filterNil([protocol !== HTTP_PROTOCOL.WEBSOCKET && useGraphQLSSE]),
      schema,
    });

    route.handler = async (req, reply) => {
      const response = await yoga.handleNodeRequestAndResponse(req, reply, { reply, req });
      response.headers.forEach((value: unknown, key: string) => {
        void reply.header(key, value);
      });
      await reply.status(response.status ?? 200).send(response.body);
    };
    break;
  } catch (e) {
    console.warn(e);
  }
};
