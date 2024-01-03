import { createLambdaHandler } from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import { LAMBDA_PLUGIN } from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { HTTP_STATUS_CODE } from '#lib-shared/http/errors/HttpError/HttpError.constants';

export const main = createLambdaHandler({
  handler: async ({ context }) => ({
    body: {
      message: 'success',
      session: context.session?.id,
      user: context.user?.claims.email,
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    statusCode: HTTP_STATUS_CODE.SUCCESS,
  }),
  plugins: [LAMBDA_PLUGIN.AUTHENTICATION],
});
