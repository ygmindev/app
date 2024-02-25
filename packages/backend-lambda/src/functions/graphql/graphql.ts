import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { _config as databaseConfig } from '@lib/config/database/database.mongo';
import { type ContextModel } from '@lib/platform/core/core.models';

const context: ContextModel = {};

export const main = createLambdaHandler({
  context,
  databaseConfig,
  plugins: [LAMBDA_PLUGIN.AUTHENTICATION],
  type: LAMBDA_TYPE.GRAPHQL,
});
