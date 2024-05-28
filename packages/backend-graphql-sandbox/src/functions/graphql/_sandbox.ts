import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { type _SandboxParamsModel } from '@backend/graphql-sandbox/functions/graphql/_sandbox.models';
import graphqlConfig from '@lib/config/graphql/graphql';
import { info } from '@lib/shared/logging/utils/logger/logger';

export const _sandbox = async ({ port }: _SandboxParamsModel): Promise<void> => {
  const schema = graphqlConfig.config();
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, { listen: { port } });
  info('sandbox running on:', url);
};
