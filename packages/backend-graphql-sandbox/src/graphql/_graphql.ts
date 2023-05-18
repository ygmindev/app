import _graphqlConfig from '@lib/config/graphql/_graphql';
import { info } from '@lib/shared/logging/utils/logger/logger';
import { ApolloServer } from 'apollo-server';
import type { _GraphqlParamsModel } from 'packages/backend-graphql-sandbox/src/graphql/_graphql.models';

export const _graphql = async ({ port }: _GraphqlParamsModel): Promise<void> => {
  const server = new ApolloServer({ schema: _graphqlConfig });
  const { url } = await server.listen(port);
  info(`[graphql] sandbox running on: ${url}`);
};
