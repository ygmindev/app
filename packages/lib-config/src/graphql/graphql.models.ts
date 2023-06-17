import type { GraphQLSchema } from 'graphql';

import type { AuthorizeParamsModel } from '#lib-backend/auth/utils/authorize/authorize.models';
import type { _ContainerModel } from '#lib-backend/core/utils/Container/_Container.models';
import type { ConstructorModel } from '#lib-shared/core/core.models';

export type GraphqlConfigModel = {
  authorize(params: AuthorizeParamsModel): Promise<boolean>;
  container: _ContainerModel;
  resolvers: Array<ConstructorModel>;
  schemaPath: string;
};

export type _GraphqlConfigModel = GraphQLSchema;
