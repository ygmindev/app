import type { APIGatewayProxyEvent, Context } from 'aws-lambda';

export interface _GetContextParamsModel {
  context: Context;
  event: APIGatewayProxyEvent;
}
