import type { APIGatewayProxyEvent, Context } from 'aws-lambda';

export type _GetContextParamsModel = {
  context: Context;
  event: APIGatewayProxyEvent;
};
