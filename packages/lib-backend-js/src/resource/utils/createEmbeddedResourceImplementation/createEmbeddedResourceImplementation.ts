import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import { mongoFilter } from '@lib/backend/database/utils/mongoFilter/mongoFilter';
import {
  type CreateEmbeddedResourceImplementationModel,
  type CreateEmbeddedResourceImplementationParamsModel,
} from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation.models';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import {
  type FilterableResourceMethodTypeModel,
  type RESOURCE_METHOD_TYPE,
} from '@lib/shared/resource/resource.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import reduce from 'lodash/reduce';
import { type Collection, ObjectId, type PullOperator, type PushOperator } from 'mongodb';

export const createEmbeddedResourceImplementation = <
  TType extends EntityResourceModel,
  TRoot extends EntityResourceModel,
>({
  Resource,
  RootImplementation,
  afterCreate,
  afterCreateMany,
  afterGet,
  afterGetConnection,
  afterGetMany,
  afterRemove,
  afterSearch,
  afterUpdate,
  afterUpdateMany,
  beforeCreate,
  beforeCreateMany,
  beforeGet,
  beforeGetConnection,
  beforeGetMany,
  beforeRemove,
  beforeSearch,
  beforeUpdate,
  beforeUpdateMany,
  name,
}: CreateEmbeddedResourceImplementationParamsModel<
  TType,
  TRoot
>): CreateEmbeddedResourceImplementationModel<TType, TRoot> => {
  let rootImplementation: EntityResourceImplementationModel<TRoot>;
  let rootCollection: Collection;

  const getRootImplementation = (): EntityResourceImplementationModel<TRoot> => {
    rootImplementation = rootImplementation ?? Container.get(RootImplementation);
    return rootImplementation;
  };

  const getRootCollection = (): Collection => {
    const { entity } = getRootImplementation();
    rootCollection =
      rootCollection ??
      Container.get(Database, DATABASE_TYPE.MONGO).getRepository({ name: entity }).collection();
    return rootCollection;
  };

  const hydrate = (form?: Partial<TType>): Partial<TType> =>
    Container.get(Database, DATABASE_TYPE.MONGO).hydrate(Resource, form, true);

  const getMany = async (
    input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> => {
    if (!input?.root) throw new NotFoundError('root');
    const filters = mongoFilter({ filter: input.filter, id: input.id }, `$$e`);
    const skip = input?.options?.skip ?? 0;
    const take = input?.options?.take;
    let projection;
    if (isEmpty(filters)) {
      projection = take ? { $slice: [`$${name}`, skip, take] } : `$${name}`;
    } else {
      const filtersF = {
        $filter: {
          as: 'e',
          cond: filters.reduce((cond, v) => ({ ...cond, [v.condition]: [v.field, v.value] }), {}),
          input: `$${name}`,
        },
      };
      projection = take ? { $slice: [filtersF, skip, take] } : filtersF;
    }
    const rootResult = (await getRootCollection()
      .aggregate([
        { $match: { _id: new ObjectId(input.root) } },
        { $project: { [name]: projection } },
      ])
      .next()) as unknown as Partial<TRoot>;
    const result = rootResult?.[name] as unknown as PartialArrayModel<TType>;
    return { result, root: rootResult };
  };

  const count = async (
    input?: ResourceInputModel<FilterableResourceMethodTypeModel, TType, TRoot>,
  ): Promise<number> => {
    if (!input?.root) throw new NotFoundError('root');
    const filters = mongoFilter({ filter: input.filter, id: input.id }, `$$e`);
    const rootResult = (await getRootCollection().findOne(
      { _id: new ObjectId(input.root) },
      {
        projection: {
          count: {
            $size: isEmpty(filters)
              ? `$${name}`
              : {
                  $filter: {
                    as: 'e',
                    cond: filters.reduce(
                      (result, v) => ({ ...result, [v.condition]: [v.field, v.value] }),
                      {},
                    ),
                    input: `$${name}`,
                  },
                },
          },
        },
      },
    )) as { count?: number };
    return rootResult.count ?? 0;
  };

  const create = async (
    input: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> => {
    if (!input?.root) throw new NotFoundError('root');
    const form = hydrate(input?.form);
    const result = await getRootCollection().findOneAndUpdate(
      { _id: new ObjectId(input.root) },
      { $push: { [name]: form } as PushOperator<TType> },
      { returnDocument: 'after' },
    );
    return { result: form, root: result as unknown as Partial<TRoot> };
  };

  return createResourceImplementation<TType, TRoot>({
    Resource,
    afterCreate,
    afterCreateMany,
    afterGet,
    afterGetConnection,
    afterGetMany,
    afterRemove,
    afterSearch,
    afterUpdate,
    afterUpdateMany,
    beforeCreate,
    beforeCreateMany,
    beforeGet,
    beforeGetConnection,
    beforeGetMany,
    beforeRemove,
    beforeSearch,
    beforeUpdate,
    beforeUpdateMany,

    count,

    create,

    createMany: async (input, context) => {
      if (!input?.root) throw new NotFoundError('root');
      const form = input?.form?.map(hydrate);
      const result = await getRootCollection().updateOne(
        { _id: new ObjectId(input.root) },
        { $push: { [name]: { $each: form } } as PushOperator<TType> },
      );
      return { result: form, root: result as unknown as Partial<TRoot> };
    },

    get: async (input, context) => {
      if (!input?.root) throw new NotFoundError('root');
      const elemMatch = mongoFilter({ filter: input.filter, id: input.id });
      const rootResult = (await getRootCollection().findOne(
        { _id: new ObjectId(input.root) },
        {
          projection: {
            [name]: isEmpty(elemMatch)
              ? true
              : {
                  $elemMatch: elemMatch.reduce(
                    (result, v) => ({ ...result, [v.field]: { [v.condition]: v.value } }),
                    {},
                  ),
                },
          },
        },
      )) as unknown as Partial<TRoot>;
      const result = (rootResult?.[name] as unknown as PartialArrayModel<TType>)?.[0];
      return { result, root: rootResult };
    },

    getConnection: async (input, context) => {
      return getConnection({
        count: await count(input),
        getMany: getMany.bind(this),
        input,
        pagination: input?.pagination,
      });
    },

    getMany,

    name,

    remove: async (input, context) => {
      if (!input?.root) throw new NotFoundError('root');
      const elemMatch = mongoFilter({ filter: input.filter, id: input.id });
      if (isEmpty(elemMatch)) throw new NotFoundError('filter');
      const result = await getRootCollection().updateOne(
        { _id: new ObjectId(input.root) },
        {
          $pull: {
            [name]: elemMatch.reduce(
              (result, v) => ({
                ...result,
                [v.field]: { [v.condition]: v.value },
              }),
              {},
            ),
          } as PullOperator<TType>,
        },
      );
      return { result: result.acknowledged && (result.modifiedCount ?? 0) > 0 };
    },

    // TODO: fix
    search: async (input = {}, context) => {
      if (!input?.root) throw new NotFoundError('root');
      return {
        result: undefined,
        root: undefined,
      };
    },

    update: async (input, context) => {
      if (!input?.root) throw new NotFoundError('root');
      if (!input?.update) throw new NotFoundError('update');
      const elemMatch = mongoFilter({ id: input.id });
      if (isEmpty(elemMatch)) throw new NotFoundError('filter');
      const rootResult = await getRootCollection().findOneAndUpdate(
        { _id: new ObjectId(input.root), [`${name}._id`]: new ObjectId(input.id) },
        {
          $set: reduce(input.update, (result, v, k) => ({ ...result, [`${name}.$.${k}`]: v }), {}),
        },
        {
          projection: { [name]: { $elemMatch: { _id: new ObjectId(input.id) } } },
          returnDocument: 'after',
        },
      );

      if (!rootResult && input.options?.isUpsert) {
        return create({ form: { ...input.update, _id: input.id }, root: input.root }, context);
      }

      return {
        result: rootResult?.[name]?.[0] as Partial<TType>,
        root: rootResult as unknown as Partial<TRoot>,
      };
    },

    updateMany: async (input, context) => {
      if (!input?.root) throw new NotFoundError('root');
      if (!input?.update) throw new NotFoundError('update');
      const elemMatch = mongoFilter({ filter: input.filter, id: input.id });
      if (isEmpty(elemMatch)) throw new NotFoundError('filter');
      const rootResult = (await getRootCollection().findOneAndUpdate(
        { _id: new ObjectId(input.root) },
        {
          $set: reduce(
            input.update,
            (result, v, k) => ({ ...result, [`${name}.$[elem].${k}`]: v }),
            {},
          ),
        },
        {
          arrayFilters: [
            elemMatch.reduce(
              (result, v) => ({ ...result, [`elem.${v.field}`]: { [v.condition]: v.value } }),
              {},
            ),
          ],
          returnDocument: 'after',
        },
      )) as unknown as Partial<TRoot>;
      return {
        result: true,
        root: rootResult as unknown as Partial<TRoot>,
      };
    },
  });
};
