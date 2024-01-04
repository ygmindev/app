import { ApolloServer } from '@apollo/server';
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import {
  type APIGatewayProxyEventV2,
  type APIGatewayProxyWebsocketEventV2,
  type Context,
} from 'aws-lambda';
import { type GraphQLError } from 'graphql';

import { getUserFromHeader } from '#lib-backend/auth/utils/getUserFromHeader/getUserFromHeader';
import {
  type _CreateLambdaHandlerModel,
  type _CreateLambdaHandlerParamsModel,
  type _LambdaEventModel,
} from '#lib-backend/serverless/utils/createLambdaHandler/_createLambdaHandler.models';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { type LambdaTypeModel } from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';
import { initialize as initializeBackend } from '#lib-backend/setup/utils/initialize/initialize';
import { _config } from '#lib-config/data/graphql/graphql';
import { type ContextModel } from '#lib-platform/core/core.models';
import { stringify } from '#lib-shared/core/utils/stringify/stringify';
import { HttpError } from '#lib-shared/http/errors/HttpError/HttpError';

export const _createLambdaHandler = <TType extends LambdaTypeModel>({
  context: contextDefault = {},
  handler,
  plugins,
  type,
}: _CreateLambdaHandlerParamsModel<TType>): _CreateLambdaHandlerModel => {
  const getContext = async ({
    context,
    event,
  }: {
    context: Context;
    event: _LambdaEventModel<TType>;
  }): Promise<Context & ContextModel> => {
    const contextF: Context & ContextModel = { ...contextDefault, ...context };
    contextF.callbackWaitsForEmptyEventLoop = false;
    contextF.pathname = event.requestContext.routeKey;

    if (plugins?.includes(LAMBDA_PLUGIN.AUTHENTICATION)) {
      if (type !== LAMBDA_TYPE.WEBSOCKET) {
        const eventF = event as APIGatewayProxyEventV2;
        const { authorization } = eventF.headers;
        const user = await getUserFromHeader(authorization);
        user && (contextF.user = user);
        eventF.headers.group && (contextF.group = eventF.headers.group);
      }
    }

    if (plugins?.includes(LAMBDA_PLUGIN.DATABASE) && !contextF.database) {
      const { database } = await initializeBackend();
      database && (contextDefault.database = database);
    }

    contextF.sessionId =
      type === LAMBDA_TYPE.WEBSOCKET
        ? (event as APIGatewayProxyWebsocketEventV2).requestContext.connectionId
        : context.awsRequestId;

    return { ...contextDefault, ...contextF };
  };

  return async (event: _LambdaEventModel<TType>, context, callback) => {
    if (type === LAMBDA_TYPE.GRAPHQL) {
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
      const handlerF = startServerAndCreateLambdaHandler(
        server,
        handlers.createAPIGatewayProxyEventV2RequestHandler(),
        {
          context: async ({ context, event }) =>
            getContext({ context, event: event as _LambdaEventModel<TType> }),
        },
      );
      return handlerF(event as APIGatewayProxyEventV2, context, callback);
    }

    const result =
      handler &&
      (await handler({ body: event.body, context: await getContext({ context, event }) }));

    switch (type) {
      case LAMBDA_TYPE.WEBSOCKET:
        return result;
      default: {
        result?.body && (result.body = stringify(result.body));
        return result;
      }
    }
  };
};
