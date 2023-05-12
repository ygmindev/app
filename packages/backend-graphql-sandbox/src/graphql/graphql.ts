import { setup } from '@tool/task/core/utils/setup/setup';
import toNumber from 'lodash/toNumber';
import { _graphql } from 'packages/backend-graphql-sandbox/src/graphql/_graphql';

export const graphql = async (): Promise<void> => {
  await setup.initialize();
  await _graphql({
    port: process.env.APP_SERVER_API_PORT ? toNumber(process.env.APP_SERVER_API_PORT) : undefined,
  });
};
