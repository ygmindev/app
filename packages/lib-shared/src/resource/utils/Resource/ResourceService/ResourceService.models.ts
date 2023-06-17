import type { WithResourceNameModel } from '#lib-shared/resource/decorators/withResourceName/withResourceName.models';
import type { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import type { ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import type { InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import type { OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import type { RootModel } from '#lib-shared/resource/utils/Root/Root.models';

export type ResourceServiceParamsModel<
  TType,
  TForm,
  TRoot = undefined,
> = WithResourceNameModel<TRoot> & ResourceServiceDecoratorModel<TType, TForm, TRoot>;

export type ResourceServiceModel<TType, TForm, TRoot = undefined> = {
  create(
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>>;

  decorators?: ResourceServiceDecoratorModel<TType, TForm, TRoot>;

  get(
    input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>>;

  getConnection(
    input: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>>;

  getMany(
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>>;

  remove(
    input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>>;

  update(
    input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>>;
};

export type ResourceServiceBeforeDecoratorModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = (params: {
  input: InputModel<TMethod, TType, TForm, TRoot>;
}) => Promise<InputModel<TMethod, TType, TForm, TRoot>>;

export type ResourceServiceAfterDecoratorModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = (params: {
  output: OutputModel<TMethod, TType, TRoot>;
}) => Promise<OutputModel<TMethod, TType, TRoot>>;

export type ResourceServiceDecoratorModel<TType, TForm, TRoot = undefined> = RootModel<TRoot> & {
  afterCreate?: ResourceServiceAfterDecoratorModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>;
  afterGet?: ResourceServiceAfterDecoratorModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>;
  afterGetConnection?: ResourceServiceAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TRoot
  >;
  afterGetMany?: ResourceServiceAfterDecoratorModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>;
  afterRemove?: ResourceServiceAfterDecoratorModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>;
  afterUpdate?: ResourceServiceAfterDecoratorModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>;
  beforeCreate?: ResourceServiceBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE,
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
