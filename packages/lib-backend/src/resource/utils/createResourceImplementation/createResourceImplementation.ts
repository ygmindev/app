import {
  type CreateResourceImplementationModel,
  type CreateResourceImplementationParamsModel,
} from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation.models';
import { type ContextModel } from '@lib/platform/core/core.models';
import { type PrototypeModel } from '@lib/shared/core/core.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { collapseFilter } from '@lib/shared/resource/utils/collapseFilter/collapseFilter';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type ResourceImplementationDecoratorModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export const createResourceImplementation = <
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
>({
  afterCreate,
  afterCreateMany,
  afterGet,
  afterGetConnection,
  afterGetMany,
  afterRemove,
  afterUpdate,
  beforeCreate,
  beforeCreateMany,
  beforeGet,
  beforeGetConnection,
  beforeGetMany,
  beforeRemove,
  beforeUpdate,
  create,
  createMany,
  get,
  getConnection,
  getMany,
  remove,
  root,
  update,
}: CreateResourceImplementationParamsModel<TType, TForm, TRoot>): CreateResourceImplementationModel<
  TType,
  TForm,
  TRoot
> => {
  class ResourceImplementation
    implements PrototypeModel<CreateResourceImplementationModel<TType, TForm, TRoot>>
  {
    protected _decorators: ResourceImplementationDecoratorModel<TType, TForm, TRoot> = {
      afterCreate,
      afterCreateMany,
      afterGet,
      afterGetConnection,
      afterGetMany,
      afterRemove,
      afterUpdate,
      beforeCreate,
      beforeCreateMany,
      beforeGet: async ({ input }, context) => {
        const inputF = { ...input, filter: collapseFilter(input?.filter) };
        return beforeGet ? beforeGet({ input: inputF }, context) : inputF;
      },
      beforeGetConnection: async ({ input }, context) => {
        const inputF = { ...input, filter: collapseFilter(input?.filter) };
        return beforeGetConnection ? beforeGetConnection({ input: inputF }, context) : inputF;
      },
      beforeGetMany: async ({ input }, context) => {
        const inputF = { ...input, filter: collapseFilter(input?.filter) };
        return beforeGetMany ? beforeGetMany({ input: inputF }, context) : inputF;
      },
      beforeRemove: async ({ input }, context) => {
        const inputF = { ...input, filter: collapseFilter(input?.filter) };
        return beforeRemove ? beforeRemove({ input: inputF }, context) : inputF;
      },
      beforeUpdate: async ({ input }, context) => {
        const inputF = { ...input, filter: collapseFilter(input?.filter) };
        return beforeUpdate ? beforeUpdate({ input: inputF }, context) : inputF;
      },
      root,
    };

    constructor() {
      this.create = this.create.bind(this);
      this.createMany = this.createMany.bind(this);
      this.get = this.get.bind(this);
      this.getMany = this.getMany.bind(this);
      this.getConnection = this.getConnection.bind(this);
      this.update = this.update.bind(this);
      this.remove = this.remove.bind(this);
    }

    public get decorators(): ResourceImplementationDecoratorModel<TType, TForm, TRoot> {
      return this._decorators;
    }

    public set decorators(value: ResourceImplementationDecoratorModel<TType, TForm, TRoot>) {
      this._decorators = value;
    }

    async create(
      input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm> = {},
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeCreate
          ? await this.decorators.beforeCreate({ input }, context)
          : input,
      );
      const root = inputF?.root ?? this._decorators.root;
      inputF && root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot> = await create(
        inputF,
        context,
      );
      return this.decorators.afterCreate
        ? this.decorators.afterCreate({ input: inputF, output }, context)
        : output;
    }

    async createMany(
      input: InputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TForm> = {},
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>> {
      let inputF = this.decorators.beforeCreateMany
        ? await this.decorators.beforeCreateMany({ input }, context)
        : input;

      inputF = inputF?.form
        ? ((await mapSequence(
            inputF?.form?.map(
              (form) => async () =>
                this.decorators.beforeCreate &&
                this.decorators.beforeCreate({ input: { form } }, context),
            ),
          )) as InputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TForm>)
        : inputF;

      inputF = cleanObject(inputF);
      const root = inputF?.root ?? this._decorators.root;
      inputF && root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot> = await createMany(
        inputF,
        context,
      );
      return this.decorators.afterCreateMany
        ? this.decorators.afterCreateMany({ input: inputF, output }, context)
        : output;
    }

    async get(
      input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TForm> = {},
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeGet ? await this.decorators.beforeGet({ input }, context) : input,
      );
      const root = inputF?.root ?? this._decorators.root;
      inputF && root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot> = await get(
        inputF,
        context,
      );
      return this.decorators.afterGet
        ? this.decorators.afterGet({ input: inputF, output }, context)
        : output;
    }

    async getMany(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm> = {},
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeGetMany
          ? await this.decorators.beforeGetMany({ input }, context)
          : input,
      );
      const root = inputF?.root ?? this._decorators.root;
      inputF && root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot> = await getMany(
        inputF,
        context,
      );
      return this.decorators.afterGetMany
        ? this.decorators.afterGetMany({ input: inputF, output }, context)
        : output;
    }

    async getConnection(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm> = {},
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeGetConnection
          ? await this.decorators.beforeGetConnection({ input }, context)
          : input,
      );
      const root = inputF?.root ?? this._decorators.root;
      inputF && root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot> =
        await getConnection(inputF, context);
      return this.decorators.afterGetConnection
        ? this.decorators.afterGetConnection({ input: inputF, output }, context)
        : output;
    }

    async update(
      input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm> = {},
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeUpdate
          ? await this.decorators.beforeUpdate({ input }, context)
          : input,
      );
      const root = inputF?.root ?? this._decorators.root;
      inputF && root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot> = await update(
        inputF,
        context,
      );
      return this.decorators.afterUpdate
        ? this.decorators.afterUpdate({ input: inputF, output }, context)
        : output;
    }

    async remove(
      input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm> = {},
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeRemove
          ? await this.decorators.beforeRemove({ input }, context)
          : input,
      );
      const root = inputF?.root ?? this._decorators.root;
      inputF && root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot> = await remove(
        inputF,
        context,
      );
      return this.decorators.afterRemove
        ? this.decorators.afterRemove({ input: inputF, output }, context)
        : output;
    }

    async count(): Promise<number> {
      return this.count();
    }
  }

  return ResourceImplementation as CreateResourceImplementationModel<TType, TForm, TRoot>;
};
