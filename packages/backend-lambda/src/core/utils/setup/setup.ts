import { ApolloServer } from '@apollo/server';
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';

import { type SetupModel } from '#backend-lambda/core/utils/setup/setup.models';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { getContext } from '#lib-backend/serverless/utils/getContext/getContext';
import { _config as _graphQlConfig } from '#lib-config/data/graphql/graphql';
import { _config as _configDatabase } from '#lib-config/database/database.mongo';
import { stringify } from '#lib-shared/core/utils/stringify/stringify';
import { error } from '#lib-shared/logging/utils/logger/logger';

export const setup = async (): SetupModel => {
  const database = new Database(_configDatabase());
  await database.connect();
  Container.set(Database, database, DATABASE_TYPE.MONGO);

  const server = new ApolloServer({
    formatError: (e) => {
      error(stringify(e));
      return { ...e, extensions: { ...e.extensions, statusCode: e.extensions?.statusCode } };
    },
    schema: _graphQlConfig(),
  });
  const handler = startServerAndCreateLambdaHandler(
    server,
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
    { context: async ({ context, event }) => getContext({ context, event }) },
  );
  return {
    database,
    handler,
    onTerminate: async () => {
      await database.close();
    },
  };
};
