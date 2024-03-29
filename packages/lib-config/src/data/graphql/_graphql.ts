import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '@lib/config/data/graphql/graphql.models';
import { type ContextModel } from '@lib/platform/core/core.models';
import { type BuildSchemaOptions, type ContainerType } from 'type-graphql';
import { buildSchemaSync } from 'type-graphql';

export const _graphql = ({
  authorize,
  container,
  resolvers,
  schemaDir,
}: GraphqlConfigModel): _GraphqlConfigModel =>
  buildSchemaSync({
    authChecker: ({ context }, roles) => authorize({ context: context as ContextModel, roles }),
    container: container as unknown as ContainerType,
    emitSchemaFile: schemaDir,
    nullableByDefault: true,
    resolvers: resolvers as unknown as BuildSchemaOptions['resolvers'],
    validate: { forbidUnknownValues: false },
  });
