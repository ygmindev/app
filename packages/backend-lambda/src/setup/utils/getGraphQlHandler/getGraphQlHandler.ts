import { ApolloServer } from '@apollo/server';
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { type GraphQLError } from 'graphql';

import { type GetGraphQlHandlerModel } from '#backend-lambda/setup/utils/getGraphQlHandler/getGraphQlHandler.models';
import { getRequestContext } from '#lib-backend/serverless/utils/getRequestContext/getRequestContext';
import { initialize as initializeBackend } from '#lib-backend/setup/utils/initialize/initialize';
import { _config } from '#lib-config/data/graphql/graphql';
import { HttpError } from '#lib-shared/http/errors/HttpError/HttpError';

export const getGraphQlHandler = async (): Promise<GetGraphQlHandlerModel> => {
  const { database } = await initializeBackend();

  const server = new ApolloServer({
    allowBatchedHttpRequests: true,
    formatError: (e, originalError) => {
      const originalErrorF = (originalError as GraphQLError)?.originalError as HttpError;
      const errorF = new HttpError(
        originalErrorF?.statusCode,
        e.message ?? originalErrorF?.message,
        (e.extensions?.stacktrace as string) ?? (e as Error)?.stack ?? originalErrorF.stack,
      );
      console.error(e);
      console.error(errorF);
      return errorF;
    },
    schema: _config(),
  });

  const handler = startServerAndCreateLambdaHandler(
    server,
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
    { context: async ({ context, event }) => getRequestContext({ context, event }) },
  );
  return { database, handler };
};
