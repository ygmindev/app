import { Container } from '@lib/backend/core/utils/Container/Container';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { SubscriptionResolver } from '@lib/config/graphql/_subs';
import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '@lib/config/graphql/graphql.models';
import { PubSub as _PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { type BuildSchemaOptions, type ContainerType, type PubSub } from 'type-graphql';
import { buildSchemaSync } from 'type-graphql';

export const _graphql = ({
  authorize,
  container,
  resolvers,
  schemaDir,
}: GraphqlConfigModel): _GraphqlConfigModel =>
  buildSchemaSync({
    authChecker: ({ context }, roles) =>
      authorize({ context: context as RequestContextModel, roles }),
    container: container as unknown as ContainerType,
    emitSchemaFile: schemaDir,
    nullableByDefault: true,
    pubSub: Container.get(_PubSub) as unknown as PubSub,
    resolvers: [...resolvers, SubscriptionResolver] as unknown as BuildSchemaOptions['resolvers'],
    validate: { forbidUnknownValues: false },
  });
