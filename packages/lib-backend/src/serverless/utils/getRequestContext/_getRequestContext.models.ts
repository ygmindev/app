import { type APIGatewayProxyEventV2, type Context } from 'aws-lambda';

import { type ContextModel } from '#lib-platform/core/core.models';

export type _GetRequestContextParamsModel = {
  context: Context;
  event: APIGatewayProxyEventV2;
};

export type _GetRequestContextModel = Context & ContextModel;
