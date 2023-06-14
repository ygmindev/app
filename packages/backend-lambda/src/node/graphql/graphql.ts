import { createHandler } from '#lib-backend/serverless/utils/createHandler/createHandler';
import { getContext } from '#lib-backend/serverless/utils/getContext/getContext';
import { config } from '#lib-config/core/setup/setup.node';
import { _config } from '#lib-config/graphql/graphql';
import { stringify } from '#lib-shared/core/utils/stringify/stringify';
import { HTTP_STATUS_CODE } from '#lib-shared/http/errors/HttpError/HttpError.constants';
import { error } from '#lib-shared/logging/utils/logger/logger';
import { ApolloServer } from 'apollo-server-lambda';
import type { Context, Handler } from 'aws-lambda';
import type { GraphQLFormattedError } from 'graphql';

let isInitialized: boolean;

let handler: Handler;

export const main = createHandler(async (event, context, callback) => {
  if (!isInitialized) {
    await config.onInitialize();
    isInitialized = true;
  }
  if (!handler) {
    handler = new ApolloServer({
      context: async ({ context, event }): Promise<Context> => getContext({ context, event }),
      formatError: (e): GraphQLFormattedError => {
        error('[graphql]', stringify(e));

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
      schema: _config,
    }).createHandler();
  }
  return handler(event, context, callback);
});
