import { type BuildSchemaOptions, type ContainerType } from 'type-graphql';
import { buildSchemaSync } from 'type-graphql';

import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '#lib-config/data/graphql/graphql.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';

export const _graphql = ({
  authorize,
  container,
  resolvers,
  schemaPath,
}: GraphqlConfigModel): _GraphqlConfigModel =>
  buildSchemaSync({
    authChecker: ({ context }, roles) => authorize({ context: context as ContextModel, roles }),
    container: container as unknown as ContainerType,
    emitSchemaFile: schemaPath,
    nullableByDefault: true,
    resolvers: resolvers as unknown as BuildSchemaOptions['resolvers'],
    validate: { forbidUnknownValues: false },
  });