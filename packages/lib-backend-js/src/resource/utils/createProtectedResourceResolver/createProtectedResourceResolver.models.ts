import { type CreateProtectedResoureImplementationModel } from '@lib/backend/resource/utils/createProtectedResourceImplementation/createProtectedResourceImplementation.models';
import { type CreateResourceResolverParamsModel } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type CreateProtectedResourceResolverParamsModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = Omit<CreateResourceResolverParamsModel<TType, TForm>, 'ResourceImplementation'> & {
  ResourceImplementation: CreateProtectedResoureImplementationModel<TType, TForm>;
};

export type CreateProtectedResourceResolverModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = CreateProtectedResoureImplementationModel<TType, TForm>;
