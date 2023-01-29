import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { _graphql } from '@server/sandbox/graphql/_graphql';
import toNumber from 'lodash/toNumber';

export const graphql = async (): Promise<void> => {
  await initialize();
  await _graphql({
    port: process.env.APP_SERVER_API_PORT ? toNumber(process.env.APP_SERVER_API_PORT) : undefined,
  });
};
