import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { _config as graphQlConfig } from '@lib/config/data/graphql/graphql';
import { _config as databaseConfig } from '@lib/config/database/database.mongo';
import { type ContextModel } from '@lib/platform/core/core.models';

const context: ContextModel = {};

export const main = createLambdaHandler({
  context,
  databaseConfig,
  graphQlConfig,
  plugins: [LAMBDA_PLUGIN.AUTHENTICATION],
  type: LAMBDA_TYPE.GRAPHQL,
});
