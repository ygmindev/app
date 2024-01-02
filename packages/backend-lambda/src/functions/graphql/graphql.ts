import { createLambdaHandler } from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import { LAMBDA_PLUGIN } from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { type ContextModel } from '#lib-platform/core/core.models';

const context: ContextModel = {};

export const main = createLambdaHandler({
  context,
  plugins: [LAMBDA_PLUGIN.DATABASE, LAMBDA_PLUGIN.GRAPHQL],
});
