import { type ServerlessRequestContextModel } from '@lib/backend/serverless/serverless.models';
import {
  type LAMBDA_PLUGIN,
  type LAMBDA_TYPE,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { type LambdaResponseModel } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';
import { type GraphqlConfigModel } from '@lib/config/graphql/graphql.models';
import {
  type APIGatewayProxyEventV2,
  type APIGatewayProxyWebsocketEventV2,
  type Handler,
} from 'aws-lambda';

export type _CreateLambdaHandlerParamsModel<TType = Record<string, unknown>> = {
  context?: ServerlessRequestContextModel;
  graphql?: GraphqlConfigModel;
  plugins?: Array<LAMBDA_PLUGIN>;
  type?: LAMBDA_TYPE;
  websocketUri: string;
  handler?({
    body,
    context,
  }: {
    body?: TType;
    context: ServerlessRequestContextModel;
  }): Promise<LambdaResponseModel>;
  onClose?(): Promise<void>;
  onInitialize?(): Promise<void>;
};

export type _CreateLambdaHandlerModel = Handler;

export type _LambdaEventModel = APIGatewayProxyEventV2 | APIGatewayProxyWebsocketEventV2;
