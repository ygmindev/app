import { type _SandboxParamsModel } from '@backend-graphql-sandbox/functions/graphql/_sandbox.models';
import { _config } from '@lib-config/data/graphql/graphql';
import { info } from '@lib-shared/logging/utils/logger/logger';
import { ApolloServer } from 'apollo-server';

export const _sandbox = async ({ port }: _SandboxParamsModel): Promise<void> => {
  const server = new ApolloServer({ schema: _config() });
  const { url } = await server.listen(port);
  info('sandbox running on:', url);
};
