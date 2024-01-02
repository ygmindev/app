import { ApolloServer } from '@apollo/server';
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { type APIGatewayProxyWebsocketEventV2, type Context } from 'aws-lambda';
import { type GraphQLError } from 'graphql';

import { getUserFromHeader } from '#lib-backend/auth/utils/getUserFromHeader/getUserFromHeader';
import { type SessionFormModel } from '#lib-backend/serverless/resources/Session/Session.models';
import {
  type _CreateLambdaHandlerModel,
  type _CreateLambdaHandlerParamsModel,
  type _LambdaEventModel,
} from '#lib-backend/serverless/utils/createLambdaHandler/_createLambdaHandler.models';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { initialize as initializeBackend } from '#lib-backend/setup/utils/initialize/initialize';
import { _config } from '#lib-config/data/graphql/graphql';
import { type ContextModel } from '#lib-platform/core/core.models';
import { uid } from '#lib-shared/core/utils/uid/uid';
import { HttpError } from '#lib-shared/http/errors/HttpError/HttpError';

export const _createLambdaHandler = ({
  context: contextDefault = {},
  handler,
  plugins,
  type,
}: _CreateLambdaHandlerParamsModel): _CreateLambdaHandlerModel => {
  const getContext = async ({
    context,
    event,
  }: {
    context: Context;
    event: _LambdaEventModel;
  }): Promise<Context & ContextModel> => {
    const contextF: Context & ContextModel = { ...contextDefault, ...context };
    contextF.callbackWaitsForEmptyEventLoop = false;
    const session: SessionFormModel = {
      id:
        type === LAMBDA_TYPE.WEBSOCKET
          ? (event as APIGatewayProxyWebsocketEventV2).requestContext.connectionId
          : process.env.NODE_ENV === 'development'
            ? uid(event.requestContext.requestId)
            : event.requestContext.requestId,
    };
    // TODO: create websocket session in database
    contextF.session = session;

    if (plugins?.includes(LAMBDA_PLUGIN.AUTHENTICATION)) {
      const { authorization } = event.headers;
      const user = await getUserFromHeader(authorization);
      user && (contextF.user = user);
      event.headers.group && (contextF.group = event.headers.group);
    }

    if (plugins?.includes(LAMBDA_PLUGIN.DATABASE) && !contextF.database) {
      const { database } = await initializeBackend();
      database && (contextDefault.database = database);
    }

    return { ...contextDefault, ...contextF };
  };

  switch (type) {
    case LAMBDA_TYPE.GRAPHQL: {
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
      return startServerAndCreateLambdaHandler(
        server,
        handlers.createAPIGatewayProxyEventV2RequestHandler(),
        {
          context: async ({ context, event }) =>
            getContext({ context, event: event as _LambdaEventModel }),
        },
      );
    }
    default: {
      return async (event: _LambdaEventModel, context, callback) =>
        handler && handler({ context: await getContext({ context, event }) });
    }
  }
};
