import type { AccessLevelModel } from '#lib-shared/auth/resources/Access/Access.models';
import type { ClassModel, PartialModel } from '#lib-shared/core/core.models';
import type { WithResourceNameModel } from '#lib-shared/resource/decorators/withResourceName/withResourceName.models';
import type { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import type { ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import type { InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import type { ResourceServiceModel } from '#lib-shared/resource/utils/Resource/ResourceService/ResourceService.models';

export type ResourceResolverParamsModel<
  TType,
  TForm,
  TRoot = undefined,
> = WithResourceNameModel<TRoot> & {
  Resource: ClassModel<TType>;

  ResourceData?: ClassModel<TForm>;

  ResourceService: ClassModel<PartialModel<ResourceServiceModel<TType, TForm, TRoot>>>;

  RootResource?: TRoot extends undefined ? never : ClassModel<TRoot>;

  access?: Record<ResourceResolverAccessTypeModel, AccessLevelModel>;

  authorizer?: {
    default?: ResourceResolverAuthorizerModel<
      | RESOURCE_METHOD_TYPE.CREATE
      | RESOURCE_METHOD_TYPE.GET
      | RESOURCE_METHOD_TYPE.GET_CONNECTION
      | RESOURCE_METHOD_TYPE.GET_MANY
      | RESOURCE_METHOD_TYPE.REMOVE
      | RESOURCE_METHOD_TYPE.UPDATE,
      TType,
      TForm,
      TRoot
    >;

    read?: ResourceResolverAuthorizerModel<
      | RESOURCE_METHOD_TYPE.GET
      | RESOURCE_METHOD_TYPE.GET_CONNECTION
      | RESOURCE_METHOD_TYPE.GET_MANY,
      TType,
      TForm,
      TRoot
    >;

    write?: ResourceResolverAuthorizerModel<
      RESOURCE_METHOD_TYPE.CREATE | RESOURCE_METHOD_TYPE.REMOVE | RESOURCE_METHOD_TYPE.UPDATE,
      TType,
      TForm,
      TRoot
    >;
  } & {
    [TKey in RESOURCE_METHOD_TYPE]?: ResourceResolverAuthorizerModel<TKey, TType, TForm, TRoot>;
  };
};

export type ResourceResolverModel<TType, TForm, TRoot = undefined> = ResourceServiceModel<
  TType,
  TForm,
  TRoot
>;

export type ResourceResolverAccessTypeModel =
  | 'default'
  | 'read'
  | 'write'
  | ResourceMethodTypeModel;

export type ResourceResolverAuthorizerParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = {
  context?: ContextModel;
  input: InputModel<TMethod, TType, TForm, TRoot>;
};

export type ResourceResolverAuthorizerModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = (params: ResourceResolverAuthorizerParamsModel<TMethod, TType, TForm, TRoot>) => boolean;
