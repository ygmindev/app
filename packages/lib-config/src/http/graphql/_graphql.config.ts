import type {
  _GraphqlConfigModel,
  _GraphqlConfigParamsModel,
} from '@lib/config/http/graphql/_graphql.models';
import type { BuildSchemaOptions, ContainerType } from 'type-graphql';
import { buildSchemaSync } from 'type-graphql';

export const _graphqlConfig = ({
  authorize,
  container,
  resolvers,
  schemaPath,
}: _GraphqlConfigParamsModel): _GraphqlConfigModel =>
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
