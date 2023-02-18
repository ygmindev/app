import type { _GraphqlConfigParamsModel } from '@lib/config/http/graphql/_graphql.models';
import type { GraphQLSchema } from 'graphql';
import type { BuildSchemaOptions } from 'type-graphql';
import { buildSchemaSync } from 'type-graphql';

export const _graphqlConfig = ({
  authorize,
  container,
  resolvers,
  schemaPath,
}: _GraphqlConfigParamsModel): GraphQLSchema =>
  buildSchemaSync({
    authChecker: ({ context }, roles) => authorize({ context, roles }),
    container,
    emitSchemaFile: schemaPath,
    nullableByDefault: true,
    resolvers: resolvers as unknown as BuildSchemaOptions['resolvers'],
    validate: {
      forbidUnknownValues: false,
    },
  });
