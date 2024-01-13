import { type CreateProtectedResoureServiceModel } from '@lib-backend/auth/utils/createProtectedResourceService/createProtectedResourceService.models';
import { type CreateResourceResolverParamsModel } from '@lib-backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type ProtectedResourceModel } from '@lib-shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type EntityResourceDataModel } from '@lib-shared/resource/resources/EntityResource/EntityResource.models';

export type CreateProtectedResourceResolverParamsModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = Omit<CreateResourceResolverParamsModel<TType, TForm>, 'ResourceService'> & {
  ResourceService: CreateProtectedResoureServiceModel<TType, TForm>;
};

export type CreateProtectedResourceResolverModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = CreateProtectedResoureServiceModel<TType, TForm>;
