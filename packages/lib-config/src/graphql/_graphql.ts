import type {
  _GraphqlConfigModel,
} from '@lib/config/graphql/_graphql.models';
import graphqlConfig from '@lib/config/graphql/graphql';
import type { BuildSchemaOptions, ContainerType } from 'type-graphql';
import { buildSchemaSync } from 'type-graphql';

export const _graphqlConfig: _GraphqlConfigModel = buildSchemaSync({
  authChecker: ({ context }, roles) => graphqlConfig.authorize({ context, roles }),
  container: graphqlConfig as unknown as ContainerType,
  emitSchemaFile: graphqlConfig.schemaPath,
  nullableByDefault: true,
  resolvers: graphqlConfig.resolvers as unknown as BuildSchemaOptions['resolvers'],
  validate: {
    forbidUnknownValues: false,
  },
});
