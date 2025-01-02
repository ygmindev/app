import { type ServerlessRequestContextModel } from '@lib/backend/serverless/serverless.models';
import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import databaseConfig from '@lib/config/database/database.mongo';
import graphqlConfig from '@lib/config/graphql/graphql';
import { initialize } from '@service/lambda/setup/utils/initialize/initialize';
import { cleanup } from '@service/lambda/src/setup/utils/cleanup/cleanup';

const context: ServerlessRequestContextModel = {};

export const main = createLambdaHandler({
  context,
  graphql: graphqlConfig.params(),
  onClose: cleanup,
  onInitialize: async () => {
    !context.database &&
      (context.database = (await initialize({ database: databaseConfig.params() })).database);
  },
  plugins: [LAMBDA_PLUGIN.AUTHENTICATION],
  type: LAMBDA_TYPE.GRAPHQL,
});
