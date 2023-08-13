import toNumber from 'lodash/toNumber';

import { _graphql } from '#backend-graphql-sandbox/functions/graphql/_graphql';

export const graphql = async (): Promise<void> => {
  await _graphql({ port: process.env.SERVER_PORT ? toNumber(process.env.SERVER_PORT) : undefined });
};
