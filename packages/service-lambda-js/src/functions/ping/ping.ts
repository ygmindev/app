import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import { LAMBDA_PLUGIN } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export const main = createLambdaHandler({
  handler: async ({ context }) => {
    const { requestId, user } = context;
    return {
      body: {
        message: 'success',
        requestId,
        user: user?.claims.email,
      },
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: HTTP_STATUS_CODE.SUCCESS,
    };
  },
  plugins: [LAMBDA_PLUGIN.AUTHENTICATION],
});
