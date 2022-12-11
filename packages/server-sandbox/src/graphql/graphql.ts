import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { _graphql } from '@server/sandbox/graphql/_graphql';
import { toNumber } from 'lodash';

const APP_SERVER_API_PORT = getEnv('APP_SERVER_API_PORT', null);

export const graphql = async (): Promise<void> => {
  await initialize();
  await _graphql({
    port: APP_SERVER_API_PORT ? toNumber(APP_SERVER_API_PORT) : undefined,
  });
};
