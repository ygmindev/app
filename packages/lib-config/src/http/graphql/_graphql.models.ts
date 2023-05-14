import type { AuthorizeParamsModel } from '@lib/backend/auth/utils/authorize/authorize.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { _ContainerModel } from '@lib/backend/core/utils/Container/_Container.models';
import type { GraphQLSchema } from 'graphql';

export interface _GraphqlConfigParamsModel {
  authorize: (params: AuthorizeParamsModel) => Promise<boolean>;
  container: _ContainerModel;
  resolvers: Array<ConstructorModel>;
  schemaPath: string;
}

export interface _GraphqlConfigModel extends GraphQLSchema {}
