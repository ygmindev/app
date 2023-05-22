import { createHandler } from '@lib/backend/serverless/utils/createHandler/createHandler';
import { getContext } from '@lib/backend/serverless/utils/getContext/getContext';
import { _config } from '@lib/config/graphql/graphql';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
import { error } from '@lib/shared/logging/utils/logger/logger';
import { config } from '@lib/config/core/setup/setup.node';
import { ApolloServer } from 'apollo-server-lambda';
import type { Context, Handler } from 'aws-lambda';
import type { GraphQLFormattedError } from 'graphql';

let isInitialized: boolean;

let _handler: Handler;

export const main = createHandler(async (event, context, callback) => {
  if (!isInitialized) {
    await config.onInitialize();
    isInitialized = true;
  }
  if (!_handler) {
    _handler = new ApolloServer({
      context: async ({ context, event }): Promise<Context> => getContext({ context, event }),
      formatError: (e): GraphQLFormattedError => {
        error(`GraphQL Error:\n${JSON.stringify(e, null, 2)}`);

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
  return _handler(event, context, callback);
});
