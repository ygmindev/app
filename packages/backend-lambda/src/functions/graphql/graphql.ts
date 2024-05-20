import { type ServerlessRequestContextModel } from '@lib/backend/serverless/serverless.models';
import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { _config as databaseConfig } from '@lib/config/database/database.mongo';
import { _config as graphQlConfig } from '@lib/config/graphql/graphql';
import { cleanup } from 'packages/backend-lambda/src/setup/utils/cleanup/cleanup';
import { initialize } from 'packages/backend-lambda/src/setup/utils/initialize/initialize';

const context: ServerlessRequestContextModel = {};

export const main = createLambdaHandler({
  context,
  graphQlConfig,
  onClose: cleanup,
  onInitialize: async () => {
    !context.database &&
      (context.database = (await initialize({ databaseConfig: databaseConfig() })).database);
  },
  plugins: [LAMBDA_PLUGIN.AUTHENTICATION],
  type: LAMBDA_TYPE.GRAPHQL,
});
