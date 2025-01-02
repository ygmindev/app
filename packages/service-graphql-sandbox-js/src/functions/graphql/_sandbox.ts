import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import graphqlConfig from '@lib/config/graphql/graphql';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { type _SandboxParamsModel } from '@service/graphql-sandbox/functions/graphql/_sandbox.models';

export const _sandbox = async ({ port }: _SandboxParamsModel): Promise<void> => {
  const schema = graphqlConfig.config();
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, { listen: { port } });
  logger.info('sandbox running on:', url);
};
