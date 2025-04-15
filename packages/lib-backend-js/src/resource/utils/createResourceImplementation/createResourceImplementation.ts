import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import {
  type CreateResourceImplementationModel,
  type CreateResourceImplementationParamsModel,
} from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { type PrototypeModel } from '@lib/shared/core/core.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { collapseFilter } from '@lib/shared/resource/utils/collapseFilter/collapseFilter';
import { type ResourceImplementationDecoratorModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import forEach from 'lodash/forEach';

export const createResourceImplementation = <TType extends EntityResourceModel, TRoot = undefined>({
  Resource,
  afterCreate,
  afterCreateMany,
  afterGet,
  afterGetConnection,
  afterGetMany,
  afterRemove,
  afterSearch,
  afterUpdate,
  beforeCreate,
  beforeCreateMany,
  beforeGet,
  beforeGetConnection,
  beforeGetMany,
  beforeRemove,
  beforeSearch,
  beforeUpdate,
  count,
  create,
  createMany,
  get,
  getConnection,
  getMany,
  remove,
  search,
  update,
}: CreateResourceImplementationParamsModel<TType, TRoot>): CreateResourceImplementationModel<
  TType,
  TRoot
> => {
  class ResourceImplementation
    implements PrototypeModel<CreateResourceImplementationModel<TType, TRoot>>
  {
    decorators: ResourceImplementationDecoratorModel<TType, TRoot> = {
      afterCreate,
      afterCreateMany,
      afterGet,
      afterGetConnection,
      afterGetMany,
      afterRemove,
      afterSearch,
      afterUpdate,
      beforeCreate: async ({ input }, context) => {
        const formF = new Resource();
        forEach(input?.form as unknown as object, (v, k) => (formF[k as keyof typeof formF] = v));
        formF._id = formF._id ?? new ObjectId();
        formF.created = formF.created ?? new Date();
        await formF.beforeCreate?.();
        const inputF = { ...input, form: formF } as EntityResourceDataModel<TType>;
        return beforeCreate ? beforeCreate({ input: inputF }, context) : inputF;
      },
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
      beforeSearch,
      beforeUpdate: async ({ input }, context) => {
        const inputF = { ...input, filter: collapseFilter(input?.filter) };
        return beforeUpdate ? beforeUpdate({ input: inputF }, context) : inputF;
      },
    };

    constructor() {
      this.create = this.create.bind(this);
      this.createMany = this.createMany.bind(this);
      this.get = this.get.bind(this);
      this.getMany = this.getMany.bind(this);
      this.getConnection = this.getConnection.bind(this);
      this.update = this.update.bind(this);
      this.search = this.search.bind(this);
      this.remove = this.remove.bind(this);
    }

    async create(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> {
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeCreate
        ? await this.decorators.beforeCreate({ input: inputF }, context)
        : inputF;
      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot> = await create(
        inputF,
        context,
      );
      return this.decorators.afterCreate
        ? this.decorators.afterCreate({ input: inputF, output }, context)
        : output;
    }

    async createMany(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>> {
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeCreateMany
        ? await this.decorators.beforeCreateMany({ input: inputF }, context)
        : inputF;

      inputF?.form &&
        (inputF.form = (await mapSequence(
          inputF.form?.map(
            (form) => async () =>
              this.decorators.beforeCreate
                ? this.decorators.beforeCreate({ input: { form } }, context)
                : form,
          ),
        )) as Array<EntityResourceDataModel<TType>>);

      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot> =
        await createMany(inputF, context);
      return this.decorators.afterCreateMany
        ? this.decorators.afterCreateMany({ input: inputF, output }, context)
        : output;
    }

    async get(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>> {
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeGet
        ? await this.decorators.beforeGet({ input: inputF }, context)
        : inputF;

      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot> = await get(
        inputF,
        context,
      );
      return this.decorators.afterGet
        ? this.decorators.afterGet({ input: inputF, output }, context)
        : output;
    }

    async getMany(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> {
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeGetMany
        ? await this.decorators.beforeGetMany({ input: inputF }, context)
        : inputF;

      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot> =
        await getMany(inputF, context);
      return this.decorators.afterGetMany
        ? this.decorators.afterGetMany({ input: inputF, output }, context)
        : output;
    }

    async getConnection(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>> {
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeGetConnection
        ? await this.decorators.beforeGetConnection({ input: inputF }, context)
        : inputF;

      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot> =
        await getConnection(inputF, context);
      return this.decorators.afterGetConnection
        ? this.decorators.afterGetConnection({ input: inputF, output }, context)
        : output;
    }

    async update(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>> {
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeUpdate
        ? await this.decorators.beforeUpdate({ input: inputF }, context)
        : inputF;

      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot> = await update(
        inputF,
        context,
      );
      return this.decorators.afterUpdate
        ? this.decorators.afterUpdate({ input: inputF, output }, context)
        : output;
    }

    async search(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot>> {
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeSearch
        ? await this.decorators.beforeSearch({ input: inputF }, context)
        : inputF;
      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot> = await search(
        inputF,
        context,
      );
      return this.decorators.afterSearch
        ? this.decorators.afterSearch({ input: inputF, output }, context)
        : output;
    }

    async remove(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>> {
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeRemove
        ? await this.decorators.beforeRemove({ input: inputF }, context)
        : inputF;

      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot> = await remove(
        inputF,
        context,
      );
      return this.decorators.afterRemove
        ? this.decorators.afterRemove({ input: inputF, output }, context)
        : output;
    }

    async count(
      input?: ResourceInputModel<ResourceMethodTypeModel, TType, TRoot>,
    ): Promise<number> {
      return count(input);
    }
  }

  return ResourceImplementation as CreateResourceImplementationModel<TType, TRoot>;
};
