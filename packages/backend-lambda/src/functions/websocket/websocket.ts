import { createLambdaHandler } from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import { LAMBDA_TYPE } from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { HTTP_STATUS_CODE } from '#lib-shared/http/errors/HttpError/HttpError.constants';

export const connect = createLambdaHandler({
  handler: async ({ context }) => ({
    body: {
      message: 'success',
      session: context.session?.id,
      user: context.user?.claims.email,
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    statusCode: HTTP_STATUS_CODE.SUCCESS,
  }),
  type: LAMBDA_TYPE.WEBSOCKET,
});

export const disconnect = createLambdaHandler({
  handler: async ({ context }) => ({
    body: {
      message: 'success',
      session: context.session?.id,
      user: context.user?.claims.email,
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    statusCode: HTTP_STATUS_CODE.SUCCESS,
  }),
  type: LAMBDA_TYPE.WEBSOCKET,
});

export const main = createLambdaHandler({
  handler: async () => {
    return {
      body: 'success',
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
    };
  },
  type: LAMBDA_TYPE.WEBSOCKET,
});
