import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { _GraphqlConfigParamsModel } from '@lib/config/http/graphql/_graphql.models';
import type { GraphQLSchema } from 'graphql';
import { buildSchemaSync } from 'type-graphql';

export const _graphqlConfig = ({
  authorize,
  container,
  resolverExtension,
  schemaPath,
}: _GraphqlConfigParamsModel): GraphQLSchema =>
  buildSchemaSync({
    authChecker: ({ context }, roles) => authorize({ context, roles }),
    container,
    emitSchemaFile: schemaPath,
    nullableByDefault: true,
    resolvers: [fromPackages(`*/src/**/*.${resolverExtension}`)],
    validate: {
      forbidUnknownValues: false,
    },
  });
