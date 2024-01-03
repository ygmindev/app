import {
  type APIGatewayProxyEventV2,
  type APIGatewayProxyWebsocketEventV2,
  type Handler,
} from 'aws-lambda';

import { type LAMBDA_TYPE } from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import {
  type LambdaPluginModel,
  type LambdaTypeModel,
} from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';
import { type ContextModel } from '#lib-platform/core/core.models';

export type _CreateLambdaHandlerParamsModel<TType extends LambdaTypeModel> = {
  context?: ContextModel;
  handler?({
    context,
  }: {
    context: ContextModel;
  }): Promise<{ body: unknown; headers?: object; statusCode: number }>;
  plugins?: Array<LambdaPluginModel>;
  type?: TType;
};

export type _CreateLambdaHandlerModel = Handler;

export type _LambdaEventModel<TType extends LambdaTypeModel> = TType extends LAMBDA_TYPE.WEBSOCKET
  ? APIGatewayProxyEventV2
  : APIGatewayProxyWebsocketEventV2;
