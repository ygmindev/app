import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type RequestContextModel } from '@lib/config/platform/api/api.models';
import { type AccessLevelModel } from '@lib/shared/auth/resources/Access/Access.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import {
  type ResourceMethodTypeModel,
  type ResourceNameParamsModel,
  type ResourceReadMethodTypeModel,
  type ResourceWriteMethodTypeModel,
} from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type CreateResourceResolverParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceNameParamsModel<TRoot> & {
  Resource(): ResourceClassModel<TType>;

  ResourceData?(): ResourceClassModel<TForm>;

  ResourceImplementation: ResourceClassModel<
    PartialModel<ResourceImplementationModel<TType, TForm, TRoot>>
  >;

  RootResource?(): TRoot extends undefined ? never : ResourceClassModel<TRoot>;

  access?: PartialModel<Record<ResourceResolverAccessTypeModel, AccessLevelModel>>;

  authorizer?: {
    default?: ResourceResolverAuthorizerModel<ResourceMethodTypeModel, TType, TForm>;

    read?: ResourceResolverAuthorizerModel<ResourceReadMethodTypeModel, TType, TForm>;

    write?: ResourceResolverAuthorizerModel<ResourceWriteMethodTypeModel, TType, TForm>;
  } & {
    [TKey in RESOURCE_METHOD_TYPE]?: ResourceResolverAuthorizerModel<TKey, TType, TForm>;
  };
};

export type CreateResourceResolverModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceClassModel<ResourceImplementationModel<TType, TForm, TRoot>>;

export type ResourceResolverAccessTypeModel =
  | 'default'
  | 'read'
  | 'write'
  | ResourceMethodTypeModel;

export type ResourceResolverAuthorizerParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
> = {
  context?: RequestContextModel;
  input?: InputModel<TMethod, TType, TForm>;
};

export type ResourceResolverAuthorizerModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
> = (params: ResourceResolverAuthorizerParamsModel<TMethod, TType, TForm>) => boolean;
