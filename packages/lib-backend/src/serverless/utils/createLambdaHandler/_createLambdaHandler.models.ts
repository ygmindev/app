import { type ServerlessRequestContextModel } from '@lib/backend/serverless/serverless.models';
import {
  type LambdaPluginModel,
  type LambdaResponseModel,
  type LambdaTypeModel,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';
import { type _GraphqlConfigModel } from '@lib/config/data/graphql/graphql.models';
import { type _DatabaseConfigModel } from '@lib/config/database/database.models';
import {
  type APIGatewayProxyEventV2,
  type APIGatewayProxyWebsocketEventV2,
  type Handler,
} from 'aws-lambda';

export type _CreateLambdaHandlerParamsModel<TType = Record<string, unknown>> = {
  context?: ServerlessRequestContextModel;
  databaseConfig?(): _DatabaseConfigModel;
  graphQlConfig?(): _GraphqlConfigModel;
  handler?({
    body,
    context,
  }: {
    body?: TType;
    context: ServerlessRequestContextModel;
  }): Promise<LambdaResponseModel>;
  plugins?: Array<LambdaPluginModel>;
  type?: LambdaTypeModel;
  websocketUri: string;
};

export type _CreateLambdaHandlerModel = Handler;

export type _LambdaEventModel = APIGatewayProxyEventV2 | APIGatewayProxyWebsocketEventV2;
