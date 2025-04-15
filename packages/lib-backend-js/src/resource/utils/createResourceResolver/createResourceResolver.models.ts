import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { type AccessLevelModel } from '@lib/shared/auth/resources/Access/Access.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import {
  type ResourceMethodTypeModel,
  type ResourceNameParamsModel,
  type ResourceReadMethodTypeModel,
  type ResourceWriteMethodTypeModel,
} from '@lib/shared/resource/resource.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';

export type CreateResourceResolverParamsModel<
  TType extends EntityResourceModel,
  TRoot = undefined,
> = ResourceNameParamsModel<TRoot> & {
  Resource(): ResourceClassModel<TType>;

  ResourceImplementation: ResourceClassModel<
    PartialModel<ResourceImplementationModel<TType, TRoot>>
  >;

  RootResource?(): TRoot extends undefined ? never : ResourceClassModel<TRoot>;

  access?: PartialModel<Record<ResourceResolverAccessTypeModel, AccessLevelModel>>;

  authorizer?: {
    default?: ResourceResolverAuthorizerModel<ResourceMethodTypeModel, TType>;

    read?: ResourceResolverAuthorizerModel<ResourceReadMethodTypeModel, TType>;

    write?: ResourceResolverAuthorizerModel<ResourceWriteMethodTypeModel, TType>;
  } & {
    [TKey in RESOURCE_METHOD_TYPE]?: ResourceResolverAuthorizerModel<TKey, TType>;
  };
};

export type CreateResourceResolverModel<
  TType extends EntityResourceModel,
  TRoot = undefined,
> = ResourceClassModel<ResourceImplementationModel<TType, TRoot>>;

export type ResourceResolverAccessTypeModel =
  | 'default'
  | 'read'
  | 'write'
  | ResourceMethodTypeModel;

export type ResourceResolverAuthorizerParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
> = {
  context?: RequestContextModel;
  input?: ResourceInputModel<TMethod, TType>;
};

export type ResourceResolverAuthorizerModel<TMethod extends ResourceMethodTypeModel, TType> = (
  params: ResourceResolverAuthorizerParamsModel<TMethod, TType>,
) => boolean;
