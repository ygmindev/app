import type { _GraphqlParamsModel } from 'packages/backend-graphql-sandbox/src/graphql/_graphql.models';
import { graphqlConfig } from '@lib/config/http/graphql/graphql.config';
import { info } from '@lib/shared/logging/utils/logger/logger';
import { ApolloServer } from 'apollo-server';

export const _graphql = async ({ port }: _GraphqlParamsModel): Promise<void> => {
  const server = new ApolloServer({ schema: graphqlConfig });
  const { url } = await server.listen(port);
  info(`[graphql] sandbox running on: ${url}`);
};
