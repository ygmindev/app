import { schema } from '@lib/backend/graphql/utils/schema/schema';
import { createHandler } from '@lib/backend/lambda/utils/createHandler/createHandler';
import { getContext } from '@lib/backend/lambda/utils/getContext/getContext';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { error } from '@lib/shared/logging/utils/logger/logger';
import { ApolloServer } from 'apollo-server-lambda';
import type { Context } from 'aws-lambda';
import type { GraphQLFormattedError } from 'graphql';

let isInitialized: boolean;

const graphQlHandler = new ApolloServer({
  context: async ({ context, event }): Promise<Context> => getContext({ context, event }),
  formatError: (e): GraphQLFormattedError => {
    error(`GraphQL Error:\n${JSON.stringify(e, null, 2)}`);
    return {
      ...e,
      extensions: {
        ...e.extensions,
        code: (e.originalError as Error)?.constructor?.name || e.extensions.code,
      },
    };
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
