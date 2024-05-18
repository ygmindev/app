import { type ServerlessRequestContextModel } from '@lib/backend/serverless/serverless.models';
import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { _config as graphQlConfig } from '@lib/config/data/graphql/graphql';
import { _config as databaseConfig } from '@lib/config/database/database.mongo';

const context: ServerlessRequestContextModel = {};

export const main = createLambdaHandler({
  context,
  databaseConfig,
  graphQlConfig,
  plugins: [LAMBDA_PLUGIN.AUTHENTICATION],
  type: LAMBDA_TYPE.GRAPHQL,
});
