import { authorize } from '@lib/backend/auth/utils/authorize/authorize';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import type { GraphqlConfigParamsModel } from '@lib/config/http/graphql/graphql.models';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const graphqlConfig: GraphqlConfigParamsModel = {
  authorize,

  container: Container,

  resolverExtension: 'resolver.ts',

  schemaPath: fromStatic('graphql/schema.gql'),
};
