import toNumber from 'lodash/toNumber';
import { _graphql } from 'packages/backend-graphql-sandbox/src/graphql/_graphql';

export const graphql = async (): Promise<void> => {
  await _graphql({
    port: process.env.SERVER_PORT ? toNumber(process.env.SERVER_PORT) : undefined,
  });
};
