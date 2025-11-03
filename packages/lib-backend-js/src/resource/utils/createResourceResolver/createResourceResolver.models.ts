import {
  type ResourceAccessTypeModel,
  type ResourceClassModel,
} from '@lib/backend/resource/resource.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { type ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import {
  type RESOURCE_METHOD_TYPE,
  type ResourceNameParamsModel,
  type ResourceReadMethodTypeModel,
  type ResourceWriteMethodTypeModel,
} from '@lib/shared/resource/resource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';

export type CreateResourceResolverParamsModel<
  TType extends ResourceModel,
  TRoot = undefined,
> = ResourceNameParamsModel<TRoot> & {
  ResourceImplementation: ResourceClassModel<
    PartialModel<ResourceImplementationModel<TType, TRoot>>
  >;

  access?: PartialModel<Record<ResourceAccessTypeModel, ACCESS_LEVEL>>;

  authorizer?: {
    default?: ResourceResolverAuthorizerModel<RESOURCE_METHOD_TYPE, TType>;

    read?: ResourceResolverAuthorizerModel<ResourceReadMethodTypeModel, TType>;

    write?: ResourceResolverAuthorizerModel<ResourceWriteMethodTypeModel, TType>;
  } & {
    [TKey in RESOURCE_METHOD_TYPE]?: ResourceResolverAuthorizerModel<TKey, TType>;
  };

  Resource(): ResourceClassModel<TType>;

  RootResource?(): TRoot extends undefined ? never : ResourceClassModel<TRoot>;
};

export type CreateResourceResolverModel<
  TType extends ResourceModel,
  TRoot = undefined,
> = ResourceClassModel<ResourceImplementationModel<TType, TRoot>>;

export type ResourceResolverAuthorizerParamsModel<TMethod extends RESOURCE_METHOD_TYPE, TType> = {
  context?: RequestContextModel;
  input?: ResourceInputModel<TMethod, TType>;
};

export type ResourceResolverAuthorizerModel<TMethod extends RESOURCE_METHOD_TYPE, TType> = (
  params: ResourceResolverAuthorizerParamsModel<TMethod, TType>,
) => boolean;
