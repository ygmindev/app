import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { type RepositoryModel } from '#lib-backend/database/utils/Database/Database.models';
import {
  type CreateEntityResourceServiceModel,
  type CreateEntityResourceServiceParamsModel,
} from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type ResourceServiceDecoratorModel } from '#lib-shared/resource/utils/ResourceService/ResourceService.models';

export const createEntityResourceService = <TType, TForm = undefined>({
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
  name,
}: CreateEntityResourceServiceParamsModel<TType, TForm>): CreateEntityResourceServiceModel<
  TType,
  TForm
> => {
  class EntityResourceService implements EntityResourceServiceModel<TType, TForm> {
    protected _repository: RepositoryModel<TType> = Container.get(
      Database,
      DATABASE_TYPE.MONGO,
    ).getRepository<TType>({ name });

    protected _decorators: ResourceServiceDecoratorModel<TType, TForm> = {
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
    };

    public get repository(): RepositoryModel<TType> {
      return this._repository;
    }

    public get decorators(): ResourceServiceDecoratorModel<TType, TForm> {
      return this._decorators;
    }

    public set decorators(value: ResourceServiceDecoratorModel<TType, TForm>) {
      this._decorators = value;
    }

    async create(
      input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType>> {
      const inputF = cleanObject(
        this.decorators.beforeCreate
          ? await this.decorators.beforeCreate({ input }, context)
          : input,
      );
      const output = await this._repository.create(
        inputF as unknown as InputModel<
          RESOURCE_METHOD_TYPE.CREATE,
          TType,
          EntityResourceDataModel<TType>
        >,
      );
      return this.decorators.afterCreate
        ? this.decorators.afterCreate({ output }, context)
        : output;
    }

    get = async (
      input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TForm>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType>> => {
      const inputF = cleanObject(
        this.decorators.beforeGet ? await this.decorators.beforeGet({ input }, context) : input,
      );
      const output = await this._repository.get(inputF);
      return this.decorators.afterGet ? this.decorators.afterGet({ output }, context) : output;
    };

    async getMany(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType>> {
      const inputF = cleanObject(
        this.decorators.beforeGetMany
          ? await this.decorators.beforeGetMany({ input }, context)
          : input,
      );
      const output = await this._repository.getMany(inputF);
      return this.decorators.afterGetMany
        ? this.decorators.afterGetMany({ output }, context)
        : output;
    }

    async getConnection(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType>> {
      const inputF = cleanObject(
        this.decorators.beforeGetConnection
          ? await this.decorators.beforeGetConnection({ input }, context)
          : input,
      );
      const output = await this._repository.getConnection(inputF);
      return this.decorators.afterGetConnection
        ? this.decorators.afterGetConnection({ output }, context)
        : output;
    }

    async update(
      input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType>> {
      const inputF = cleanObject(
        this.decorators.beforeUpdate
          ? await this.decorators.beforeUpdate({ input }, context)
          : input,
      );
      const output = await this._repository.update(inputF);
      return this.decorators.afterUpdate
        ? this.decorators.afterUpdate({ output }, context)
        : output;
    }

    async remove(
      input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType>> {
      const inputF = cleanObject(
        this.decorators.beforeRemove
          ? await this.decorators.beforeRemove({ input }, context)
          : input,
      );
      const output = await this._repository.remove(inputF);
      return this.decorators.afterRemove
        ? this.decorators.afterRemove({ output }, context)
        : output;
    }

    async count(): Promise<number> {
      return this._repository.count();
    }
  }

  return EntityResourceService as CreateEntityResourceServiceModel<TType, TForm>;
};
