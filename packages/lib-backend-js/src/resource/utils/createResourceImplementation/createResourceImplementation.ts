// import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import {
  type CreateResourceImplementationModel,
  type CreateResourceImplementationParamsModel,
} from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { FILTER_COMBINATION, FILTER_CONDITION } from '@lib/model/resource/Filter/Filter.constants';
import { type FilterModel } from '@lib/model/resource/Filter/Filter.models';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type PartialArrayModel, type PrototypeModel } from '@lib/shared/core/core.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { collapseFilter } from '@lib/shared/resource/utils/collapseFilter/collapseFilter';
import { type ResourceImplementationDecoratorModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export const createResourceImplementation = <TType extends ResourceModel, TRoot = undefined>({
  Resource,
  afterCreate,
  afterCreateMany,
  afterGet,
  afterGetMany,
  afterRemove,
  afterSubscribe,
  afterUpdate,
  afterUpdateMany,
  beforeCreate,
  beforeCreateMany,
  beforeGet,
  beforeGetMany,
  beforeRemove,
  beforeSubscribe,
  beforeUpdate,
  beforeUpdateMany,
  count,
  create,
  createMany,
  get,
  getMany,
  name,
  remove,
  subscribe,
  update,
  updateMany,
}: CreateResourceImplementationParamsModel<TType, TRoot>): CreateResourceImplementationModel<
  TType,
  TRoot
> => {
  class ResourceImplementation implements PrototypeModel<
    CreateResourceImplementationModel<TType, TRoot>
  > {
    decorators: ResourceImplementationDecoratorModel<TType, TRoot> = {
      afterCreate,
      afterCreateMany,
      afterGet,
      afterGetMany,
      afterRemove,
      afterSubscribe,
      afterUpdate,
      afterUpdateMany,
      beforeCreate,
      beforeCreateMany,
      beforeGet: async ({ input }, context) => {
        const inputF = { ...input, filter: collapseFilter(input?.filter) };
        return beforeGet ? beforeGet({ input: inputF }, context) : inputF;
      },
      beforeGetMany: async ({ input }, context) => {
        const inputF = { ...input, filter: collapseFilter(input?.filter) };
        return beforeGetMany ? beforeGetMany({ input: inputF }, context) : inputF;
      },
      beforeRemove: async ({ input }, context) => {
        const inputF = { ...input, filter: collapseFilter(input?.filter) };
        return beforeRemove ? beforeRemove({ input: inputF }, context) : inputF;
      },
      beforeSubscribe,
      beforeUpdate,
      beforeUpdateMany: async ({ input }, context) => {
        const inputF = { ...input, filter: collapseFilter(input?.filter) };
        return beforeUpdateMany ? beforeUpdateMany({ input: inputF }, context) : inputF;
      },
    };

    name: string = name;

    constructor() {
      this.create = this.create.bind(this);
      this.createMany = this.createMany.bind(this);
      this.get = this.get.bind(this);
      this.getMany = this.getMany.bind(this);
      this.update = this.update.bind(this);
      this.updateMany = this.updateMany.bind(this);
      this.remove = this.remove.bind(this);
      this.search = this.search.bind(this);
      this.subscribe = this.subscribe.bind(this);
    }

    async count(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
    ): Promise<number> {
      return count ? count(input) : ((await getMany?.(input))?.result?.items.length ?? 0);
    }

    async create(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> {
      if (!create) {
        return {};
      }
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
      if (!createMany) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeCreateMany
        ? await this.decorators.beforeCreateMany({ input: inputF }, context)
        : inputF;
      inputF?.form &&
        (inputF.form = (await mapSequence(
          inputF.form?.map(
            (form) => async () =>
              this.decorators.beforeCreate
                ? (await this.decorators.beforeCreate({ input: { form } }, context))?.form
                : form,
          ),
        )) as PartialArrayModel<TType>);
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
      if (!get) {
        return {};
      }
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
      if (!getMany) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeGetMany
        ? await this.decorators.beforeGetMany({ input: inputF }, context)
        : inputF;
      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot> =
        (await getMany(inputF, context)) ?? [];
      return this.decorators.afterGetMany
        ? this.decorators.afterGetMany({ input: inputF, output }, context)
        : output;
    }

    async remove(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>> {
      if (!remove) {
        return {};
      }
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

    async search(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot>> {
      if (!getMany || !input) {
        return {};
      }
      let filter: Array<FilterModel<TType>> = input.fields.map((v) => ({
        condition: FILTER_CONDITION.LIKE,
        field: v,
        value: input.query,
      }));
      filter = cleanObject(filter);
      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot> =
        (await getMany(
          { filter, options: { ...input.options, combination: FILTER_COMBINATION.OR } },
          context,
        )) ?? [];
      return output;
    }

    async subscribe(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType, TRoot>,
      payload?: Partial<TType>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType, TRoot>> {
      if (!subscribe) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeSubscribe
        ? await this.decorators.beforeSubscribe({ input: inputF }, context)
        : inputF;
      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType, TRoot> =
        await subscribe(inputF, payload, context);
      return this.decorators.afterSubscribe
        ? this.decorators.afterSubscribe({ input: inputF, output }, context)
        : output;
    }

    async update(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>> {
      if (!update) {
        return {};
      }
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

    async updateMany(
      input?: ResourceInputModel<RESOURCE_METHOD_TYPE.UPDATE_MANY, TType, TRoot>,
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.UPDATE_MANY, TType, TRoot>> {
      if (!updateMany) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeUpdateMany
        ? await this.decorators.beforeUpdateMany({ input: inputF }, context)
        : inputF;
      const output: ResourceOutputModel<RESOURCE_METHOD_TYPE.UPDATE_MANY, TType, TRoot> =
        await updateMany(inputF, context);
      return this.decorators.afterUpdateMany
        ? this.decorators.afterUpdateMany({ input: inputF, output }, context)
        : output;
    }
  }

  return ResourceImplementation as CreateResourceImplementationModel<TType, TRoot>;
};
