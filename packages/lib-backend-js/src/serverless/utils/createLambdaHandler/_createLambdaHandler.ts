import { ApolloServer } from '@apollo/server';
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import {
  ApiGatewayManagementApiClient,
  PostToConnectionCommand,
} from '@aws-sdk/client-apigatewaymanagementapi';
import { getTokenFromHeader } from '@lib/backend/auth/utils/getTokenFromHeader/getTokenFromHeader';
import { formatGraphqlError } from '@lib/backend/http/utils/formatGraphqlError/formatGraphqlError';
import { type ServerlessRequestContextModel } from '@lib/backend/serverless/serverless.models';
import {
  type _CreateLambdaHandlerModel,
  type _CreateLambdaHandlerParamsModel,
  type _LambdaEventModel,
} from '@lib/backend/serverless/utils/createLambdaHandler/_createLambdaHandler.models';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { type LambdaResponseModel } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';
import { _graphql } from '@lib/config/graphql/_graphql';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import {
  type APIGatewayProxyEventV2,
  type APIGatewayProxyEventV2WithRequestContext,
  type APIGatewayProxyWebsocketEventV2,
  type Context,
} from 'aws-lambda';
import { type GraphQLError } from 'graphql';

export const _createLambdaHandler = <TType = Record<string, unknown>>({
  context: contextDefault = {},
  graphql,
  handler,
  onInitialize,
  plugins,
  type,
  websocketUri,
}: _CreateLambdaHandlerParamsModel<TType>): _CreateLambdaHandlerModel => {
  const getContext = async ({
    context,
    event,
  }: {
    context: Context;
    event: _LambdaEventModel;
  }): Promise<Context & ServerlessRequestContextModel> => {
    const contextF: Context & ServerlessRequestContextModel = { ...contextDefault, ...context };
    contextF.callbackWaitsForEmptyEventLoop = false;
    contextF.pathname = event.requestContext.routeKey;

    onInitialize && (await onInitialize());

    // authentication from header / query parameters
    if (plugins?.includes(LAMBDA_PLUGIN.AUTHENTICATION)) {
      const eventF = event as APIGatewayProxyEventV2;
      const authorization =
        eventF.headers?.authorization ?? eventF.queryStringParameters?.Authorization;
      const user = await getTokenFromHeader(authorization);
      user && (contextF.user = user);
      eventF.headers?.group && (contextF.group = eventF.headers.group);
    }

    // request id
    contextF.requestId =
      type === LAMBDA_TYPE.WEBSOCKET
        ? (event as APIGatewayProxyWebsocketEventV2).requestContext.connectionId
        : contextF.requestId;

    return contextF;
  };

  return async (event: _LambdaEventModel, context, callback) => {
    // GraphQL
    if (type === LAMBDA_TYPE.GRAPHQL && graphql) {
      const server = new ApolloServer({
        allowBatchedHttpRequests: true,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        formatError: (e, originalError) => formatGraphqlError(e as GraphQLError),
        schema: _graphql(graphql),
      });
      const handlerF = startServerAndCreateLambdaHandler(
        server,
        handlers.createAPIGatewayProxyEventV2RequestHandler(),
        { context: async ({ context, event }) => getContext({ context, event }) },
      );
      return handlerF(event as APIGatewayProxyEventV2, context, callback);
    }

    const contextF = await getContext({ context, event });
    const result: LambdaResponseModel = {
      statusCode: HTTP_STATUS_CODE.SUCCESS,
      ...(handler &&
        (await handler({
          body: {
            ...(event.body ? JSON.parse(event.body) : {}),
            ...(event as APIGatewayProxyEventV2WithRequestContext<unknown>).queryStringParameters,
          } as TType,
          context: contextF,
        }))),
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
