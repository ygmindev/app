import type { APIGatewayProxyEventV2, Context } from 'aws-lambda';

export type _GetContextParamsModel = {
  context: Context;
  event: APIGatewayProxyEventV2;
};
