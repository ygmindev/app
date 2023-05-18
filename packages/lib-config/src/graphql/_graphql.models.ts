import type { AuthorizeParamsModel } from '@lib/backend/auth/utils/authorize/authorize.models';
import type { _ContainerModel } from '@lib/backend/core/utils/Container/_Container.models';
import type { ConfigStaticModel } from '@lib/config/core/core.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { GraphQLSchema } from 'graphql';

export type GraphqlConfigModel = ConfigStaticModel<{
  authorize: (params: AuthorizeParamsModel) => Promise<boolean>;
  container: _ContainerModel;
  resolvers: Array<ConstructorModel>;
  schemaPath: string;
}>;

export type _GraphqlConfigModel = ConfigStaticModel<GraphQLSchema>;
