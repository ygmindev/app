import { authorize } from '@lib/backend/auth/utils/authorize/authorize';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import type { GraphqlConfigParamsModel } from '@lib/config/http/graphql/graphql.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';

export const graphqlConfig: GraphqlConfigParamsModel = {
  authorize,

  container: Container,

  pathname: `api/${GRAPHQL}`,

  resolverExtension: 'resolver.ts',

  schemaPath: fromStatic('graphql/schema.gql'),
};
