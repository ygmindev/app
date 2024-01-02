import {
  type APIGatewayProxyEventV2,
  type APIGatewayProxyWebsocketEventV2,
  type Handler,
} from 'aws-lambda';

import {
  type LambdaPluginModel,
  type LambdaTypeModel,
} from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';
import { type ContextModel } from '#lib-platform/core/core.models';

export type _CreateLambdaHandlerParamsModel = {
  context?: ContextModel;
  handler?({
    context,
  }: {
    context: ContextModel;
  }): Promise<{ body: string; headers: object; statusCode: number }>;
  plugins?: Array<LambdaPluginModel>;
  type?: LambdaTypeModel;
};

export type _CreateLambdaHandlerModel = Handler;

export type _LambdaEventModel = APIGatewayProxyWebsocketEventV2 & APIGatewayProxyEventV2;
