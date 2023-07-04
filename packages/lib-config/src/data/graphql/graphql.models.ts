import { type GraphQLSchema } from 'graphql';

import {
  type AuthorizeModel,
  type AuthorizeParamsModel,
} from '#lib-backend/auth/utils/authorize/authorize.models';
import { type ContainerModel } from '#lib-backend/core/utils/Container/Container.models';
import { type CallablePromiseModel, type ClassModel } from '#lib-shared/core/core.models';

export type GraphqlConfigModel = {
  authorize: CallablePromiseModel<AuthorizeModel, AuthorizeParamsModel>;
  container: ContainerModel;
  resolvers: Array<ClassModel>;
  schemaPath: string;
};

export type _GraphqlConfigModel = GraphQLSchema;
