import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { type RequestContextModel } from '@lib/config/api/api.models';
import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '@lib/config/graphql/graphql.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub as _PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { type BuildSchemaOptions, type ContainerType, type PubSub } from 'type-graphql';
import { buildSchemaSync } from 'type-graphql';

export const _graphql = ({
  authorize,
  container,
  outDir,
  resolvers,
  schemaFilename,
}: GraphqlConfigModel): _GraphqlConfigModel =>
  buildSchemaSync({
    authChecker: ({ context }, roles) =>
      authorize({ context: context as RequestContextModel, roles }),
    container: container as unknown as ContainerType,
    emitSchemaFile: joinPaths([outDir, schemaFilename]),
    nullableByDefault: true,
    pubSub: Container.get(_PubSub) as unknown as PubSub,
    resolvers: resolvers as unknown as BuildSchemaOptions['resolvers'],
    validate: { forbidUnknownValues: false },
  });
