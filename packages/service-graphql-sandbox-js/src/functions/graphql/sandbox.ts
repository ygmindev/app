import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import databaseConfig from '@lib/config/database/database.mongo';
import { _sandbox } from '@service/graphql-sandbox/functions/graphql/_sandbox';
import { toNumber } from 'lodash';

export const sandbox = async (): Promise<void> => {
  const { cleanUp } = await initialize({ database: databaseConfig.params() });
  await _sandbox({
    port: process.env.SERVER_APP_PORT ? toNumber(process.env.SERVER_APP_PORT) : undefined,
  });
  await cleanUp?.();
};
