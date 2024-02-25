import { ApolloServer } from '@apollo/server';
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import {
  ApiGatewayManagementApiClient,
  PostToConnectionCommand,
} from '@aws-sdk/client-apigatewaymanagementapi';
import { getUserFromHeader } from '@lib/backend/auth/utils/getUserFromHeader/getUserFromHeader';
import {
  type _CreateLambdaHandlerModel,
  type _CreateLambdaHandlerParamsModel,
  type _LambdaEventModel,
} from '@lib/backend/serverless/utils/createLambdaHandler/_createLambdaHandler.models';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import {
  type LambdaResponseModel,
  type LambdaTypeModel,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';
import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import { type ContextModel } from '@lib/platform/core/core.models';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { type APIGatewayProxyEventV2, type Context } from 'aws-lambda';
import { type GraphQLError } from 'graphql';

export const _createLambdaHandler = <TType extends LambdaTypeModel>({
  context: contextDefault = {},
  databaseConfig,
  graphQlConfig,
  handler,
  plugins,
  type,
  websocketUri,
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

    // authentication from header / query parameters
    if (plugins?.includes(LAMBDA_PLUGIN.AUTHENTICATION)) {
      const eventF = event as APIGatewayProxyEventV2;
      const authorization =
        eventF.headers?.authorization ?? eventF.queryStringParameters?.Authorization;
      const user = await getUserFromHeader(authorization);
      user && (contextF.user = user);
      eventF.headers?.group && (contextF.group = eventF.headers.group);
    }

    if (databaseConfig && !contextF.database) {
      const { database } = await initializeBackend({ config: databaseConfig() });
      database && (contextDefault.database = database);
    }

    // request id
    contextF.requestId =
      type === LAMBDA_TYPE.WEBSOCKET ? event.requestContext.connectionId : contextF.requestId;

    return contextF;
  };

  return async (event: _LambdaEventModel<TType>, context, callback) => {
    // GraphQL
    if (type === LAMBDA_TYPE.GRAPHQL && graphQlConfig) {
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
        schema: graphQlConfig(),
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

    const contextF = await getContext({ context, event });
    const result: LambdaResponseModel = {
      statusCode: HTTP_STATUS_CODE.SUCCESS,
      ...(handler && (await handler({ body: event.body, context: contextF }))),
    };

    switch (type) {
      case LAMBDA_TYPE.WEBSOCKET: {
        if (contextF.pathname === '$default' && result.requestId && result.body) {
          const api = new ApiGatewayManagementApiClient({ endpoint: websocketUri });
          const command = new PostToConnectionCommand({
            ConnectionId: result.requestId,
            Data: Buffer.from(result.body as string),
          });
          await api.send(command);
          return { statusCode: HTTP_STATUS_CODE.SUCCESS };
        }
        return result;
      }
      default: {
        result.body && (result.body = stringify(result.body));
        return result;
      }
    }
  };
};
