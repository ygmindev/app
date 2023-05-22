import { config } from '@lib/config/core/setup/setup.node';
import toNumber from 'lodash/toNumber';
import { _graphql } from 'packages/backend-graphql-sandbox/src/graphql/_graphql';

export const graphql = async (): Promise<void> => {
  await config.onInitialize();
  await _graphql({
    port: process.env.APP_SERVER_API_PORT ? toNumber(process.env.APP_SERVER_API_PORT) : undefined,
  });
};
