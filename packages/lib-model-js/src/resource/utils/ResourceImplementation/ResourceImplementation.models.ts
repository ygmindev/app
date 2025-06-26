import { type RequestContextModel } from '@lib/config/api/api.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

export type ResourceImplementationModel<TType, TRoot = undefined> = {
  create(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>>;

  createMany(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>>;

  decorators?: ResourceImplementationDecoratorModel<TType, TRoot>;

  get(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>>;

  getConnection(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>>;

  getMany(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>>;

  remove(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>>;

  search(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot>>;

  update(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>>;
};

export type ResourceImplementationBeforeDecoratorModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = (
  params: { input?: ResourceInputModel<TMethod, TType, TRoot> },
  context?: RequestContextModel,
) => Promise<ResourceInputModel<TMethod, TType, TRoot> | undefined>;

export type ResourceImplementationAfterDecoratorModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = (
  params: {
    input?: ResourceInputModel<TMethod, TType, TRoot>;
    output: ResourceOutputModel<TMethod, TType, TRoot>;
  },
  context?: RequestContextModel,
) => Promise<ResourceOutputModel<TMethod, TType, TRoot>>;

export type ResourceImplementationDecoratorModel<TType, TRoot = undefined> = {
  afterCreate?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE,
    TType,
    TRoot
  >;
  afterCreateMany?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE_MANY,
    TType,
    TRoot
  >;
  afterGet?: ResourceImplementationAfterDecoratorModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>;
  afterGetConnection?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TRoot
  >;
  afterGetMany?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_MANY,
    TType,
    TRoot
  >;
  afterRemove?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.REMOVE,
    TType,
    TRoot
  >;
  afterSearch?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.SEARCH,
    TType,
    TRoot
  >;
  afterUpdate?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.UPDATE,
    TType,
    TRoot
  >;
  beforeCreate?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE,
    TType,
    TRoot
  >;
  beforeCreateMany?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE_MANY,
    TType,
    TRoot
  >;
  beforeGet?: ResourceImplementationBeforeDecoratorModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>;
  beforeGetConnection?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TRoot
  >;
  beforeGetMany?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_MANY,
    TType,
    TRoot
  >;
  beforeRemove?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.REMOVE,
    TType,
    TRoot
  >;
  beforeSearch?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.SEARCH,
    TType,
    TRoot
  >;
  beforeUpdate?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.UPDATE,
    TType,
    TRoot
  >;
};
