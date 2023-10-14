import { type ResourceClassModel } from '#lib-backend/resource/resource.models';
import { type AccessLevelModel } from '#lib-shared/auth/resources/Access/Access.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import {
  type ResourceMethodTypeModel,
  type ResourceNameParamsModel,
  type ResourceReadMethodTypeModel,
  type ResourceWriteMethodTypeModel,
} from '#lib-shared/resource/resource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type ResourceServiceModel } from '#lib-shared/resource/utils/ResourceService/ResourceService.models';

export type CreateResourceResolverParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceNameParamsModel<TRoot> & {
  Resource: ResourceClassModel<TType>;

  ResourceData?: ResourceClassModel<TForm>;

  ResourceService: ResourceClassModel<PartialModel<ResourceServiceModel<TType, TForm, TRoot>>>;

  RootResource?: TRoot extends undefined ? never : ResourceClassModel<TRoot>;

  access?: Record<ResourceResolverAccessTypeModel, AccessLevelModel>;

  authorizer?: {
    default?: ResourceResolverAuthorizerModel<ResourceMethodTypeModel, TType, TForm, TRoot>;

    read?: ResourceResolverAuthorizerModel<ResourceReadMethodTypeModel, TType, TForm, TRoot>;

    write?: ResourceResolverAuthorizerModel<ResourceWriteMethodTypeModel, TType, TForm, TRoot>;
  } & {
    [TKey in RESOURCE_METHOD_TYPE]?: ResourceResolverAuthorizerModel<TKey, TType, TForm, TRoot>;
  };
};

export type CreateResourceResolverModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceClassModel<ResourceServiceModel<TType, TForm, TRoot>>;

export type ResourceResolverAccessTypeModel =
  | 'default'
  | 'read'
  | 'write'
  | ResourceMethodTypeModel;

export type ResourceResolverAuthorizerParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = {
  context?: ContextModel;
  input: InputModel<TMethod, TType, TForm, TRoot>;
};

export type ResourceResolverAuthorizerModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = (params: ResourceResolverAuthorizerParamsModel<TMethod, TType, TForm, TRoot>) => boolean;
