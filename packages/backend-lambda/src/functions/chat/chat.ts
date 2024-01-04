import { createLambdaHandler } from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { HTTP_STATUS_CODE } from '#lib-shared/http/errors/HttpError/HttpError.constants';

export const main = createLambdaHandler({
  handler: async ({ body, context }) => {
    const { database, pathname, user } = context;
    console.warn(user);
    switch (pathname) {
      case '$connect': {
        return {
          body: { message: 'success' },
          statusCode: HTTP_STATUS_CODE.SUCCESS,
        };
      }
      case '$disconnect': {
        return {
          body: { message: 'success' },
          statusCode: HTTP_STATUS_CODE.SUCCESS,
        };
      }
      case '$default': {
        return {
          body: { message: 'success' },
          statusCode: HTTP_STATUS_CODE.SUCCESS,
        };
      }
    }
    return {
      body: body ? Buffer.from(body) : undefined,
      sessionId: '',
    };
  },
  plugins: [LAMBDA_PLUGIN.DATABASE],
  type: LAMBDA_TYPE.WEBSOCKET,
});
