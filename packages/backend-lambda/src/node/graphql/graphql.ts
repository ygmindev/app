import { ApolloServer } from '@apollo/server';
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { type Handler } from 'aws-lambda';

import { createHandler } from '#lib-backend/serverless/utils/createHandler/createHandler';
import { getContext } from '#lib-backend/serverless/utils/getContext/getContext';
import { config } from '#lib-config/core/setup/setup.node';
import { _config } from '#lib-config/data/graphql/graphql';
import { stringify } from '#lib-shared/core/utils/stringify/stringify';
import { error } from '#lib-shared/logging/utils/logger/logger';

let isInitialized: boolean;

let handler: Handler;

export const main = createHandler(async (event, context, callback) => {
  // TODO: better database init
  if (!isInitialized) {
    await config.onInitialize();
    isInitialized = true;
  }
  if (!handler) {
    const server = new ApolloServer({
      formatError: (e) => {
        error('[graphql]', stringify(e));
        return { ...e, extensions: { ...e.extensions, statusCode: e.extensions?.statusCode } };
      },
      schema: _config(),
    });
    handler = startServerAndCreateLambdaHandler(
      server,
      handlers.createAPIGatewayProxyEventV2RequestHandler(),
      { context: async ({ context, event }) => getContext({ context, event }) },
    );
  }
  return handler(event, context, callback);
});
