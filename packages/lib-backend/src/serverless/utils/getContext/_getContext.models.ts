import { type APIGatewayProxyEventV2, type Context } from 'aws-lambda';

import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';

export type _GetContextParamsModel = {
  context: Context;
  event: APIGatewayProxyEventV2;
};

export type _GetContextModel = Context & ContextModel;
