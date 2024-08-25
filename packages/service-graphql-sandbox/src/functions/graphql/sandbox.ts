import { _sandbox } from 'packages/service-graphql-sandbox/src/functions/graphql/_sandbox';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import databaseConfig from '@lib/config/database/database.mongo';
import toNumber from 'lodash/toNumber';

export const sandbox = async (): Promise<void> => {
  await initialize({ database: databaseConfig.params() });
  await _sandbox({
    port: process.env.SERVER_APP_PORT ? toNumber(process.env.SERVER_APP_PORT) : undefined,
  });
};
