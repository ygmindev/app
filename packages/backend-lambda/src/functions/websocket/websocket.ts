import { createLambdaHandler } from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import { LAMBDA_TYPE } from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';

export const connect = createLambdaHandler({
  handler: async () => {
    return {
      body: JSON.stringify('success'),
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
    };
  },
  type: LAMBDA_TYPE.WEBSOCKET,
});

export const disconnect = createLambdaHandler({
  handler: async () => {
    return {
      body: JSON.stringify('success'),
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
    };
  },
  type: LAMBDA_TYPE.WEBSOCKET,
});

export const main = createLambdaHandler({
  handler: async () => {
    return {
      body: JSON.stringify('success'),
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
    };
  },
  type: LAMBDA_TYPE.WEBSOCKET,
});
