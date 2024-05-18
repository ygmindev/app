import { type RequestContextModel } from '@lib/config/platform/api/api.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';

export type ResourceImplementationModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = {
  create(
    input?: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
    context?: RequestContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>>;

  createMany(
    input?: InputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TForm, TRoot>,
    context?: RequestContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>>;

  decorators?: ResourceImplementationDecoratorModel<TType, TForm, TRoot>;

  get(
    input?: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>,
    context?: RequestContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>>;

  getConnection(
    input?: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm, TRoot>,
    context?: RequestContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>>;

  getMany(
    input?: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>,
    context?: RequestContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>>;

  remove(
    input?: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm, TRoot>,
    context?: RequestContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>>;

  update(
    input?: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot>,
    context?: RequestContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>>;
};

export type ResourceImplementationBeforeDecoratorModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = (
  params: { input?: InputModel<TMethod, TType, TForm, TRoot> },
  context?: RequestContextModel,
) => Promise<InputModel<TMethod, TType, TForm, TRoot> | undefined>;

export type ResourceImplementationAfterDecoratorModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = (
  params: {
    input?: InputModel<TMethod, TType, TForm, TRoot>;
    output: OutputModel<TMethod, TType, TRoot>;
  },
  context?: RequestContextModel,
) => Promise<OutputModel<TMethod, TType, TRoot>>;

export type ResourceImplementationDecoratorModel<
  TType,
  TForm,
  TRoot = undefined,
> = RootInputModel<TRoot> & {
  afterCreate?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE,
    TType,
    TForm,
    TRoot
  >;
  afterCreateMany?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE_MANY,
    TType,
    TForm,
    TRoot
  >;
  afterGet?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.GET,
    TType,
    TForm,
    TRoot
  >;
  afterGetConnection?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TForm,
    TRoot
  >;
  afterGetMany?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_MANY,
    TType,
    TForm,
    TRoot
  >;
  afterRemove?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.REMOVE,
    TType,
    TForm,
    TRoot
  >;
  afterUpdate?: ResourceImplementationAfterDecoratorModel<
    RESOURCE_METHOD_TYPE.UPDATE,
    TType,
    TForm,
    TRoot
  >;
  beforeCreate?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE,
    TType,
    TForm,
    TRoot
  >;
  beforeCreateMany?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.CREATE_MANY,
    TType,
    TForm,
    TRoot
  >;
  beforeGet?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.GET,
    TType,
    TForm,
    TRoot
  >;
  beforeGetConnection?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TForm,
    TRoot
  >;
  beforeGetMany?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.GET_MANY,
    TType,
    TForm,
    TRoot
  >;
  beforeRemove?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.REMOVE,
    TType,
    TForm,
    TRoot
  >;
  beforeUpdate?: ResourceImplementationBeforeDecoratorModel<
    RESOURCE_METHOD_TYPE.UPDATE,
    TType,
    TForm,
    TRoot
  >;
};
