import {
  type CreateResourceServiceModel,
  type CreateResourceServiceParamsModel,
} from '#lib-backend/resource/utils/createResourceService/createResourceService.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import {
  type ResourceServiceDecoratorModel,
  type ResourceServiceModel,
} from '#lib-shared/resource/utils/ResourceService/ResourceService.models';

export const createResourceService = <
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
>({
  afterCreate,
  afterGet,
  afterGetConnection,
  afterGetMany,
  afterRemove,
  afterUpdate,
  beforeCreate,
  beforeGet,
  beforeGetConnection,
  beforeGetMany,
  beforeRemove,
  beforeUpdate,
  create,
  get,
  getConnection,
  getMany,
  remove,
  root,
  update,
}: CreateResourceServiceParamsModel<TType, TForm, TRoot>): CreateResourceServiceModel<
  TType,
  TForm,
  TRoot
> => {
  class ResourceService implements ResourceServiceModel<TType, TForm, TRoot> {
    protected _decorators: ResourceServiceDecoratorModel<TType, TForm, TRoot> = {
      afterCreate,
      afterGet,
      afterGetConnection,
      afterGetMany,
      afterRemove,
      afterUpdate,
      beforeCreate,
      beforeGet,
      beforeGetConnection,
      beforeGetMany,
      beforeRemove,
      beforeUpdate,
      root,
    };

    constructor() {
      this.create = this.create.bind(this);
      this.get = this.get.bind(this);
      this.getMany = this.getMany.bind(this);
      this.getConnection = this.getConnection.bind(this);
      this.update = this.update.bind(this);
      this.remove = this.remove.bind(this);
    }

    public get decorators(): ResourceServiceDecoratorModel<TType, TForm, TRoot> {
      return this._decorators;
    }

    public set decorators(value: ResourceServiceDecoratorModel<TType, TForm, TRoot>) {
      this._decorators = value;
    }

    async create(
      input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeCreate
          ? await this.decorators.beforeCreate({ input }, context)
          : input,
      );
      const root = inputF.root ?? this._decorators.root;
      root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot> = await create(
        inputF,
        context,
      );
      return this.decorators.afterCreate
        ? this.decorators.afterCreate({ output }, context)
        : output;
    }

    async get(
      input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeGet ? await this.decorators.beforeGet({ input }, context) : input,
      );
      const root = inputF.root ?? this._decorators.root;
      root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot> = await get(
        inputF,
        context,
      );
      return this.decorators.afterGet ? this.decorators.afterGet({ output }, context) : output;
    }

    async getMany(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeGetMany
          ? await this.decorators.beforeGetMany({ input }, context)
          : input,
      );
      const root = inputF.root ?? this._decorators.root;
      root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot> = await getMany(
        inputF,
        context,
      );
      return this.decorators.afterGetMany
        ? this.decorators.afterGetMany({ output }, context)
        : output;
    }

    async getConnection(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm, TRoot>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeGetConnection
          ? await this.decorators.beforeGetConnection({ input }, context)
          : input,
      );
      const root = inputF.root ?? this._decorators.root;
      root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot> =
        await getConnection(inputF, context);
      return this.decorators.afterGetConnection
        ? this.decorators.afterGetConnection({ output }, context)
        : output;
    }

    async update(
      input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeUpdate
          ? await this.decorators.beforeUpdate({ input }, context)
          : input,
      );
      const root = inputF.root ?? this._decorators.root;
      root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot> = await update(
        inputF,
        context,
      );
      return this.decorators.afterUpdate
        ? this.decorators.afterUpdate({ output }, context)
        : output;
    }

    async remove(
      input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm, TRoot>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeRemove
          ? await this.decorators.beforeRemove({ input }, context)
          : input,
      );
      const root = inputF.root ?? this._decorators.root;
      root && (inputF.root = root);
      const output: OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot> = await remove(
        inputF,
        context,
      );
      return this.decorators.afterRemove
        ? this.decorators.afterRemove({ output }, context)
        : output;
    }

    async count(): Promise<number> {
      return this.count();
    }
  }

  return ResourceService as CreateResourceServiceModel<TType, TForm, TRoot>;
};
