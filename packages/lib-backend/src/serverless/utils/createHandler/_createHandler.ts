import type { _CreateHandlerModel } from '#lib-backend/serverless/utils/createHandler/_createHandler.models';

export const _createHandler: _CreateHandlerModel =
  (handler) => async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return handler(event, context, callback);
  };
