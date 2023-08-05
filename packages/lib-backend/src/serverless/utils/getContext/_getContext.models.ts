import { type APIGatewayProxyEventV2, type Context } from 'aws-lambda';

export type _GetContextParamsModel = {
  context: Context;
  event: APIGatewayProxyEventV2;
};

export type _GetContextModel = Context;
