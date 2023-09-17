import { ApolloServer } from '@apollo/server';
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';

import { type InitializeModel } from '#backend-lambda/setup/utils/initialize/initialize.models';
import { getContext } from '#lib-backend/serverless/utils/getContext/getContext';
import { initialize as initializeBackend } from '#lib-backend/setup/utils/initialize/initialize';
import { _config } from '#lib-config/data/graphql/graphql';
import { error } from '#lib-shared/logging/utils/logger/logger';

export const initialize = async (): Promise<InitializeModel> => {
  const { database } = await initializeBackend();

  const server = new ApolloServer({
    formatError: (e) => {
      // TODO: original error isn't printed
      error(e);
      return e;
    },
    schema: _config(),
  });
  const handler = startServerAndCreateLambdaHandler(
    server,
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
    { context: async ({ context, event }) => getContext({ context, event }) },
  );
  return { database, handler };
};
