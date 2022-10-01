import { authorize } from '@lib/backend/auth/utils/authorize/authorize';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { RESOLVERS } from '@lib/config/graphql/graphql.config';
import { Container } from '@lib/shared/core/utils/Container/Container';
import type { BuildSchemaOptions } from 'type-graphql';
import { buildSchemaSync } from 'type-graphql';

export const schema = buildSchemaSync({
  authChecker: ({ context }, roles) => authorize({ context, roles }),
  container: Container,
  emitSchemaFile: fromStatic('graphql/schema.gql'),
  nullableByDefault: true,
  resolvers: RESOLVERS as unknown as BuildSchemaOptions['resolvers'],
});
