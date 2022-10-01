import { schema } from '@lib/backend/graphql/utils/schema/schema';
import { info } from '@lib/shared/logging/utils/logger/logger';
import type { _GraphqlParamsModel } from '@server/sandbox/graphql/_graphql.models';
import { ApolloServer } from 'apollo-server';

export const _graphql = async ({ port }: _GraphqlParamsModel): Promise<void> => {
  const server = new ApolloServer({ schema });
  const { url } = await server.listen(port);
  info(`sandbox running on: ${url}`);
};
