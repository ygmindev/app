import {
  type _CreateHandlerModel,
  type _CreateHandlerParamsModel,
} from '#lib-backend/serverless/utils/createHandler/_createHandler.models';

export const _createHandler =
  (handler: _CreateHandlerParamsModel): _CreateHandlerModel =>
  async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return handler(event, context, callback);
  };
