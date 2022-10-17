import { schema } from '@lib/backend/graphql/utils/schema/schema';
import { createHandler } from '@lib/backend/lambda/utils/createHandler/createHandler';
import { getContext } from '@lib/backend/lambda/utils/getContext/getContext';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
import { error } from '@lib/shared/logging/utils/logger/logger';
import { ApolloServer } from 'apollo-server-lambda';
import type { Context } from 'aws-lambda';
import type { GraphQLFormattedError } from 'graphql';

let isInitialized: boolean;

const graphQlHandler = new ApolloServer({
  context: async ({ context, event }): Promise<Context> => getContext({ context, event }),

  formatError: (e): GraphQLFormattedError => {
    error(`GraphQL Error:\n${JSON.stringify(e, null, 2)}`);

    // TODO: add more
    const name = (e.originalError as Error)?.constructor?.name;
    const statusCode = (() => {
      switch (name) {
        case 'ForbiddenError':
          return HTTP_STATUS_CODE.FORBIDDEN;
        default:
          return e.extensions.statusCode;
      }
    })();

    return { ...e, extensions: { ...e.extensions, name, statusCode } };
  },
  schema,
}).createHandler();

export const main = createHandler(async (event, context, callback) => {
  if (!isInitialized) {
    await initialize();
    isInitialized = true;
  }
  return graphQlHandler(event, context, callback);
});
