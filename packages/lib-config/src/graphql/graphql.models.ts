import { type GraphQLSchema } from 'graphql';

import { type AuthorizeParamsModel } from '#lib-backend/auth/utils/authorize/authorize.models';
import { type ContainerModel } from '#lib-backend/core/utils/Container/Container.models';
import { type ConfigDynamicModel } from '#lib-config/core/core.models';
import { type ClassModel, type EmptyObjectModel } from '#lib-shared/core/core.models';

export type GraphqlConfigOptionsModel = EmptyObjectModel;

export type GraphqlConfigModel = ConfigDynamicModel<
  {
    authorize(params: AuthorizeParamsModel): Promise<boolean>;
    container: ContainerModel;
    resolvers: Array<ClassModel>;
    schemaPath: string;
  },
  GraphqlConfigOptionsModel
>;

export type _GraphqlConfigModel = ConfigDynamicModel<GraphQLSchema, GraphqlConfigOptionsModel>;
