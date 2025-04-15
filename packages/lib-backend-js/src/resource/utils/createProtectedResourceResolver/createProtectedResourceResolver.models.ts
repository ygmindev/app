import { type CreateProtectedResoureImplementationModel } from '@lib/backend/resource/utils/createProtectedResourceImplementation/createProtectedResourceImplementation.models';
import { type CreateResourceResolverParamsModel } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';

export type CreateProtectedResourceResolverParamsModel<TType extends ProtectedResourceModel> = Omit<
  CreateResourceResolverParamsModel<TType>,
  'ResourceImplementation'
> & {
  ResourceImplementation: CreateProtectedResoureImplementationModel<TType>;
};

export type CreateProtectedResourceResolverModel<TType extends ProtectedResourceModel> =
  CreateProtectedResoureImplementationModel<TType>;
