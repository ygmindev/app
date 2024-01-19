import { type ContextModel } from '@lib/platform/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';

export type ResourceServiceModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = {
  create(
    input?: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>>;

  createMany(
    input?: InputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>>;

  decorators?: ResourceServiceDecoratorModel<TType, TForm, TRoot>;

  get(
    input?: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>>;

  getConnection(
    input?: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>>;

  getMany(
    input?: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>>;

  remove(
    input?: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>>;

  update(
    input?: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>>;
};

export type ResourceServiceBeforeDecoratorModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = (
  params: { input?: InputModel<TMethod, TType, TForm, TRoot> },
  context?: ContextModel,
) => Promise<InputModel<TMethod, TType, TForm, TRoot> | undefined>;

export type ResourceServiceAfterDecoratorModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = (
  params: {
    input?: InputModel<TMethod, TType, TForm, TRoot>;
    output: OutputModel<TMethod, TType, TRoot>;
  },
  context?: ContextModel,
) => Promise<OutputModel<TMethod, TType, TRoot>>;

export type ResourceServiceDecoratorModel<
  TType,
  TForm,
  TRoot = undefined,
> = RootInputModel<TRoot> & {
  afterCreate?: ResourceServiceAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE,
    TType,
    TForm,
    TRoot
  >;
  afterCreateMany?: ResourceServiceAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE_MANY,
    TType,
    TForm,
    TRoot
  >;
  afterGet?: ResourceServiceAfterDecoratorModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>;
  afterGetConnection?: ResourceServiceAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TForm,
    TRoot
  >;
  afterGetMany?: ResourceServiceAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_MANY,
    TType,
    TForm,
    TRoot
  >;
  afterRemove?: ResourceServiceAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.REMOVE,
    TType,
    TForm,
    TRoot
  >;
  afterUpdate?: ResourceServiceAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.UPDATE,
    TType,
    TForm,
    TRoot
  >;
  beforeCreate?: ResourceServiceBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE,
    TType,
    TForm,
    TRoot
  >;
  beforeCreateMany?: ResourceServiceBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE_MANY,
    TType,
    TForm,
    TRoot
  >;
  beforeGet?: ResourceServiceBeforeDecoratorModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>;
  beforeGetConnection?: ResourceServiceBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TForm,
    TRoot
  >;
  beforeGetMany?: ResourceServiceBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_MANY,
    TType,
    TForm,
    TRoot
  >;
  beforeRemove?: ResourceServiceBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.REMOVE,
    TType,
    TForm,
    TRoot
  >;
  beforeUpdate?: ResourceServiceBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.UPDATE,
    TType,
    TForm,
    TRoot
  >;
};
