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
import { type PartialArrayModel, type StringKeyModel } from '@lib/shared/core/core.models';
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
  beforeCreate,
  beforeCreateMany,
  beforeGet,
  beforeGetConnection,
  beforeGetMany,
  beforeRemove,
  beforeSearch,
  beforeUpdate,
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
    beforeCreate,
    beforeCreateMany,
    beforeGet,
    beforeGetConnection,
    beforeGetMany,
    beforeRemove,
    beforeSearch,
    beforeUpdate,

    count,

    create: async (input, context) => {
      if (!input?.root) throw new NotFoundError('root');
      const form = hydrate(input?.form);
      const result = await getRootCollection().updateOne(
        { _id: new ObjectId(input.root) },
        { $push: { [name]: form } as PushOperator<TType> },
      );
      return { result: form, root: result as unknown as Partial<TRoot> };
    },

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
              (result, v) => ({ ...result, [v.field]: { [v.condition]: v.value } }),
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
      const { result: rootResult } = await getRootImplementation().get(
        { id: [input.root] },
        context,
      );
      return {
        result: undefined,
        root: rootResult,
      };
    },

    update: async (input, context) => {
      if (!input?.root) throw new NotFoundError('root');
      if (!input?.update) throw new NotFoundError('update');
      const elemMatch = mongoFilter({ filter: input.filter, id: input.id });
      if (isEmpty(elemMatch)) throw new NotFoundError('filter');
      const rootResult = (await getRootCollection().findOneAndUpdate(
        { _id: new ObjectId(input.root) },
        {
          $set: reduce(
            input.update,
            (result, v, k) => ({
              ...result,
              [`${name}.$[elem].${k}`]: v,
            }),
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
      console.warn(rootResult?.[name] as unknown as PartialArrayModel<TType>);
      console.warn(elemMatch);
      const result = (rootResult?.[name] as unknown as PartialArrayModel<TType>).find((child) =>
        elemMatch.every((f) => {
          const v = child[f.field as StringKeyModel<TType>];
          switch (f.condition) {
            case '$eq':
              return v === f.value;
            case '$in':
              return (f.value as Array<unknown>).includes(v);
            case '$gte':
              return (v as number) >= (f.value as number);
            case '$lte':
              return (v as number) <= (f.value as number);
            case '$gt':
              return (v as number) > (f.value as number);
            case '$lt':
              return (v as number) < (f.value as number);
            default:
              return false;
          }
        }),
      );
      console.warn(result);
      return { result, root: rootResult };
    },
  });
};

// import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
// import { Database } from '@lib/backend/database/utils/Database/Database';
// import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
// import {
//   type CreateEmbeddedResourceImplementationModel,
//   type CreateEmbeddedResourceImplementationParamsModel,
// } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation.models';
// import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
// import { getMetadata } from '@lib/backend/resource/utils/getMetadata/getMetadata';
// import { type RequestContextModel } from '@lib/config/api/api.models';
// import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
// import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
// import { type PartialArrayModel, type StringKeyModel } from '@lib/shared/core/core.models';
// import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
// import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
// import { Container } from '@lib/shared/core/utils/Container/Container';
// import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
// import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
// import { merge } from '@lib/shared/core/utils/merge/merge';
// import { toPlainObject } from '@lib/shared/core/utils/toPlainObject/toPlainObject';
// import {
//   type FilterableResourceMethodTypeModel,
//   type RESOURCE_METHOD_TYPE,
// } from '@lib/shared/resource/resource.models';
// import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
// import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
// import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
// import { type UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';
// import every from 'lodash/every';
// import isNil from 'lodash/isNil';
// import toString from 'lodash/toString';

// export const createEmbeddedResourceImplementation = <
//   TType extends EntityResourceModel,
//   TRoot extends EntityResourceModel,
// >({
//   Resource,
//   RootImplementation,
//   afterCreate,
//   afterCreateMany,
//   afterGet,
//   afterGetConnection,
//   afterGetMany,
//   afterRemove,
//   afterSearch,
//   afterUpdate,
//   beforeCreate,
//   beforeCreateMany,
//   beforeGet,
//   beforeGetConnection,
//   beforeGetMany,
//   beforeRemove,
//   beforeSearch,
//   beforeUpdate,
//   name,
// }: CreateEmbeddedResourceImplementationParamsModel<
//   TType,
//   TRoot
// >): CreateEmbeddedResourceImplementationModel<TType, TRoot> => {
//   let rootImplementation: EntityResourceImplementationModel<TRoot>;

//   const getRootImplementation = (): EntityResourceImplementationModel<TRoot> => {
//     rootImplementation = rootImplementation ?? Container.get(RootImplementation);
//     return rootImplementation;
//   };

//   const hydrate = (form?: Partial<TType>): Partial<TType> =>
//     Container.get(Database, DATABASE_TYPE.MONGO).hydrate(name, form, true);

//   const getRoot = async (root?: TRoot extends undefined ? never : string): Promise<TRoot> => {
//     if (root) {
//       const { result } = await getRootImplementation().get({ id: [root] });
//       if (!result) {
//         throw new NotFoundError(root);
//       }
//       return result as TRoot;
//     }
//     throw new InvalidArgumentError('root');
//   };

//   const filter = <TMethod extends FilterableResourceMethodTypeModel>(
//     values: PartialArrayModel<TType>,
//     {
//       input,
//       isArray,
//       isInverse,
//       skip,
//       take,
//     }: {
//       input?: ResourceInputModel<TMethod, TType, TRoot>;
//       isArray?: boolean;
//       isInverse?: boolean;
//       skip?: number;
//       take?: number;
//     } = {},
//   ): PartialArrayModel<TType> => {
//     const isArrayF = isArray ?? !input?.id;
//     const predicate = (v: TType): boolean => {
//       if (input?.id) {
//         const meta = getMetadata({ Resource: () => Resource });
//         return isEqual(
//           (meta.indices ?? ['_id']).map((index) => toString(v[index])).sort(),
//           input.id.map(toString).sort(),
//         );
//       }
//       return every(
//         input?.filter?.map((f) => {
//           const value = v[f.field as StringKeyModel<TType>];
//           if (isNil(value)) {
//             return false;
//           }
//           switch (f.condition) {
//             case FILTER_CONDITION.GRATER_THAN_EQUAL:
//               return (value as number) >= (f.value as number);
//             case FILTER_CONDITION.GREATER_THAN:
//               return (value as number) > (f.value as number);
//             case FILTER_CONDITION.IN:
//               return (f.value as Array<unknown>).includes(value);
//             case FILTER_CONDITION.LESS_THAN:
//               return (value as number) < (f.value as number);
//             case FILTER_CONDITION.LESS_THAN_EQUAL:
//               return (value as number) <= (f.value as number);
//             case FILTER_CONDITION.LIKE:
//               return (value as string).toLowerCase().includes((f.value as string).toLowerCase());
//             case FILTER_CONDITION.NOT_EQUAL:
//               return value !== f.value;
//             case FILTER_CONDITION.NOT_IN:
//               return !(f.value as Array<unknown>).includes(value);
//             default:
//               return value === f.value;
//           }
//         }),
//       );
//     };
//     let resultF =
//       filterNil(
//         isArrayF
//           ? values?.filter((v) => (isInverse ? !predicate(v) : predicate(v)))
//           : [values?.find((v) => (isInverse ? !predicate(v) : predicate(v)))],
//       ) ?? [];
//     (take || skip) && (resultF = resultF.slice(skip ?? 0, take ? (skip ?? 0) + take : undefined));
//     return resultF;
//   };

//   const getMany = async (
//     input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
//     context?: RequestContextModel,
//   ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> => {
//     const root = await getRoot(input.root);
//     const values = (root?.[name] as unknown as PartialArrayModel<TType>) ?? [];
//     const result = filter(values, {
//       input,
//       skip: input.options?.skip,
//       take: input.options?.take,
//     });
//     return { result, root };
//   };

//   const create = async (
//     input?: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>,
//     context?: RequestContextModel,
//   ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> => {
//     // TODO: LOCK
//     const root = await getRoot(input?.root);
//     const form = hydrate(input?.form);
//     const values = (root?.[name] as unknown as PartialArrayModel<TType>) ?? [];
//     values?.push(form);
//     await getRootImplementation().update(
//       { id: [root._id], update: { [name]: values } as UpdateModel<TRoot> },
//       context,
//     );
//     return { result: form, root };
//   };

//   const count = async (
//     input?: ResourceInputModel<FilterableResourceMethodTypeModel, TType, TRoot>,
//   ): Promise<number> => {
//     const root = await getRoot(input?.root);
//     let values = (root?.[name] as unknown as PartialArrayModel<TType>) ?? [];
//     values = filter(values, { input });
//     return values?.length ?? 0;
//   };

//   return createResourceImplementation<TType, TRoot>({
//     Resource,
//     afterCreate,
//     afterCreateMany,
//     afterGet,
//     afterGetConnection,
//     afterGetMany,
//     afterRemove,
//     afterSearch,
//     afterUpdate,
//     beforeCreate,
//     beforeCreateMany,
//     beforeGet,
//     beforeGetConnection,
//     beforeGetMany,
//     beforeRemove,
//     beforeSearch,
//     beforeUpdate,

//     count,

//     create,

//     createMany: async (input, context) => {
//       const root = await getRoot(input?.root);
//       const values = await Promise.all(input?.form?.map(hydrate) ?? []);
//       let result = (root?.[name] as unknown as PartialArrayModel<TType>) ?? [];
//       result = result?.concat(values);
//       await getRootImplementation().update(
//         { id: [root._id], update: { [name]: result } as UpdateModel<TRoot> },
//         context,
//       );
//       return { result, root };
//     },

//     get: async (input, context) => {
//       const root = await getRoot(input?.root);
//       const result = filter((root?.[name] as unknown as PartialArrayModel<TType>) ?? [], {
//         input,
//       })?.[0];
//       return { result };
//     },

//     getConnection: async (input, context) => {
//       return getConnection({
//         count: await count(input),
//         getMany: getMany.bind(this),
//         input,
//         pagination: input?.pagination,
//       });
//     },

//     getMany,

//     name,

//     remove: async (input, context) => {
//       const root = await getRoot(input?.root);
//       const result = filter((root?.[name] as unknown as Array<TType>) ?? [], {
//         input,
//         isInverse: true,
//       });
//       await getRootImplementation().update(
//         {
//           id: [root._id],
//           update: { [name]: result } as UpdateModel<TRoot>,
//         },
//         context,
//       );
//       return { result: true };
//     },

//     // TODO: fix
//     search: async (input = {}, context) => {
//       if (input.root) {
//         const { result: rootResult } = await getRootImplementation().get(
//           { id: [input.root] },
//           context,
//         );
//         return {
//           result: undefined,
//           root: rootResult,
//         };
//       }
//       throw new InvalidArgumentError('root');
//     },

//     update: async (input, context) => {
//       const root = await getRoot(input?.root);
//       let values = (root?.[name] as unknown as Array<TType>) ?? [];
//       let result = filter({ input, values })?.[0];
//       result = merge([toPlainObject(input?.update) as unknown as TType, toPlainObject(result)]);
//       values = values.map((v) => (toString(v._id) === toString(result._id) ? result : v));
//       await getRootImplementation().update(
//         { id: [root._id], update: { [name]: values } as UpdateModel<TRoot> },
//         context,
//       );
//       return { result, root };
//     },
//   });
// };
