import { ApolloServer } from 'apollo-server';
import type { _GraphqlParamsModel } from 'packages/backend-graphql-sandbox/src/graphql/_graphql.models';

import { _config } from '#lib-config/graphql/graphql';
import { info } from '#lib-shared/logging/utils/logger/logger';

export const _graphql = async ({ port }: _GraphqlParamsModel): Promise<void> => {
  const server = new ApolloServer({ schema: _config });
  const { url } = await server.listen(port);
  info('[graphql] sandbox running on:', url);
};
