import { type LAMBDA_TYPE } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import {
  type LambdaPluginModel,
  type LambdaResponseModel,
  type LambdaTypeModel,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';
import { type ContextModel } from '@lib/platform/core/core.models';
import {
  type APIGatewayProxyEventV2,
  type APIGatewayProxyWebsocketEventV2,
  type Handler,
} from 'aws-lambda';

export type _CreateLambdaHandlerParamsModel<TType extends LambdaTypeModel> = {
  context?: ContextModel;
  handler?({
    body,
    context,
  }: {
    body?: string;
    context: ContextModel;
  }): Promise<LambdaResponseModel>;
  plugins?: Array<LambdaPluginModel>;
  type?: TType;
  uri: string;
};

export type _CreateLambdaHandlerModel = Handler;

export type _LambdaEventModel<TType extends LambdaTypeModel> = TType extends LAMBDA_TYPE.WEBSOCKET
  ? APIGatewayProxyEventV2
  : APIGatewayProxyWebsocketEventV2;
