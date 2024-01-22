import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { type _SandboxParamsModel } from '@backend/graphql-sandbox/functions/graphql/_sandbox.models';
import { _config } from '@lib/config/data/graphql/graphql';
import { info } from '@lib/shared/logging/utils/logger/logger';

export const _sandbox = async ({ port }: _SandboxParamsModel): Promise<void> => {
  const server = new ApolloServer({ schema: _config() });
  const { url } = await startStandaloneServer(server, { listen: { port } });
  info('sandbox running on:', url);
};
