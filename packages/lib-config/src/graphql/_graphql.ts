import type { BuildSchemaOptions, ContainerType } from 'type-graphql';
import { buildSchemaSync } from 'type-graphql';

import type { _GraphqlConfigModel, GraphqlConfigModel } from '#lib-config/graphql/graphql.models';

export const _graphql = ({
  authorize,
  container,
  resolvers,
  schemaPath,
}: GraphqlConfigModel): _GraphqlConfigModel =>
  buildSchemaSync({
    authChecker: ({ context }, roles) => authorize({ context, roles }),
    container: container as unknown as ContainerType,
    emitSchemaFile: schemaPath,
    nullableByDefault: true,
    resolvers: resolvers as unknown as BuildSchemaOptions['resolvers'],
    validate: {
      forbidUnknownValues: false,
    },
  });
