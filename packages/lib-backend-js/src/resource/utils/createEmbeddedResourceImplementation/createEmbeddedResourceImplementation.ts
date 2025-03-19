import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import {
  type CreateEmbeddedResourceImplementationModel,
  type CreateEmbeddedResourceImplementationParamsModel,
} from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation.models';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { getMetadata } from '@lib/backend/resource/utils/getMetadata/getMetadata';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { toPlainObject } from '@lib/shared/core/utils/toPlainObject/toPlainObject';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type FilterableResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';
import every from 'lodash/every';
import forEach from 'lodash/forEach';
import isNil from 'lodash/isNil';
import toString from 'lodash/toString';

export const createEmbeddedResourceImplementation = <
  TType extends EntityResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
  TRootForm,
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
  TForm,
  TRoot,
  TRootForm
>): CreateEmbeddedResourceImplementationModel<TType, TForm, TRoot> => {
  let rootImplementation: EntityResourceImplementationModel<TRoot, TRootForm>;

  const getRootImplementation = (): EntityResourceImplementationModel<TRoot, TRootForm> => {
    rootImplementation = rootImplementation ?? Container.get(RootImplementation);
    return rootImplementation;
  };

  const getForm = async (form?: TForm): Promise<TType> => {
    const formF = new Resource();
    forEach(form as unknown as object, (v, k) => (formF[k as keyof typeof formF] = v));
    await formF.beforeCreate?.();
    return formF;
  };

  const getRoot = async (root?: TRoot extends undefined ? never : string): Promise<TRoot> => {
    if (root) {
      const { result } = await getRootImplementation().get({
        filter: [{ field: '_id', value: new ObjectId(root) }],
      });
      if (!result) {
        throw new NotFoundError(root);
      }
      return result as TRoot;
    }
    throw new InvalidArgumentError('root');
  };

  const getFilter = <TMethod extends FilterableResourceMethodTypeModel>({
    input,
    isArray,
    isInverse,
    skip,
    take,
    values,
  }: {
    input?: InputModel<TMethod, TType, TForm, TRoot>;
    isArray?: boolean;
    isInverse?: boolean;
    skip?: number;
    take?: number;
    values?: Array<TType>;
  }): Array<TType> => {
    const isArrayF = isArray ?? !input?.id;
    const predicate = (v: TType): boolean => {
      if (input?.id) {
        const meta = getMetadata({ Resource: () => Resource });
        return isEqual(
          (meta.indices ?? ['_id']).map((index) => toString(v[index])).sort(),
          input.id.map(toString).sort(),
        );
      }
      return every(
        input?.filter?.map((f) => {
          const value = v[f.field as StringKeyModel<TType>];
          if (isNil(value)) {
            return false;
          }
          switch (f.condition) {
            case FILTER_CONDITION.GRATER_THAN_EQUAL:
              return (value as number) >= (f.value as number);
            case FILTER_CONDITION.GREATER_THAN:
              return (value as number) > (f.value as number);
            case FILTER_CONDITION.IN:
              return (f.value as Array<unknown>).includes(value);
            case FILTER_CONDITION.LESS_THAN:
              return (value as number) < (f.value as number);
            case FILTER_CONDITION.LESS_THAN_EQUAL:
              return (value as number) <= (f.value as number);
            case FILTER_CONDITION.LIKE:
              return (value as string).toLowerCase().includes((f.value as string).toLowerCase());
            case FILTER_CONDITION.NOT_EQUAL:
              return value !== f.value;
            case FILTER_CONDITION.NOT_IN:
              return !(f.value as Array<unknown>).includes(value);
            default:
              return value === f.value;
          }
        }),
      );
    };
    let result =
      filterNil(
        isArrayF
          ? values?.filter((v) => (isInverse ? !predicate(v) : predicate(v)))
          : [values?.find((v) => (isInverse ? !predicate(v) : predicate(v)))],
      ) ?? [];
    (take || skip) && (result = result.slice(skip ?? 0, take ? (skip ?? 0) + take : undefined));
    return result;
  };

  const getMany = async (
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot> = {},
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> => {
    const root = await getRoot(input.root);
    const result = getFilter({
      input,
      isArray: true,
      skip: input.options?.skip,
      take: input.options?.take,
      values: (root?.[name] as unknown as Array<TType>) ?? [],
    });
    return { result, root };
  };

  const create = async (
    input?: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> => {
    // TODO: LOCK
    const root = await getRoot(input?.root);
    const form = await getForm(input?.form);
    const result = (root?.[name] as unknown as Array<TType>) ?? [];
    result?.push(form);
    await getRootImplementation().update({
      filter: [{ field: '_id', value: root._id }],
      update: { [name]: result } as UpdateModel<TRoot>,
    });
    return { result: form, root };
  };

  const count = async (
    input?: InputModel<FilterableResourceMethodTypeModel, TType, TForm, TRoot>,
  ): Promise<number> => {
    const root = await getRoot(input?.root);
    let result = (root?.[name] as unknown as Array<TType>) ?? [];
    result = getFilter({ input, isArray: true, values: result });
    return result?.length ?? 0;
  };

  return createResourceImplementation<TType, TForm, TRoot>({
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

    createMany: async (input) => {
      const root = await getRoot(input?.root);
      const values = await Promise.all(input?.form?.map(async (v) => getForm(v)) ?? []);
      let result = (root?.[name] as unknown as Array<TType>) ?? [];
      result = result?.concat(values);
      await getRootImplementation().update({
        filter: [{ field: '_id', value: root._id }],
        update: { [name]: result } as UpdateModel<TRoot>,
      });
      return { result, root };
    },

    get: async (input) => {
      const root = await getRoot(input?.root);
      const result = getFilter({
        input,
        values: (root?.[name] as unknown as Array<TType>) ?? [],
      })?.[0];
      return { result };
    },

    getConnection: async (input) => {
      return getConnection({
        count: await count(input),
        getMany: getMany.bind(this),
        input,
        pagination: input?.pagination,
      });
    },

    getMany,

    name,

    remove: async (input) => {
      const root = await getRoot(input?.root);
      const result = getFilter({
        input,
        isArray: true,
        isInverse: true,
        values: (root?.[name] as unknown as Array<TType>) ?? [],
      });
      await getRootImplementation().update({
        id: [root._id],
        update: { [name]: result } as UpdateModel<TRoot>,
      });
      return { result: true };
    },

    // TODO: fix
    search: async (input = {}) => {
      if (input.root) {
        const { result: rootResult } = await getRootImplementation().get({
          filter: [{ field: '_id', value: input.root }],
        });
        return {
          result: undefined,
          root: rootResult,
        };
      }
      throw new InvalidArgumentError('root');
    },

    update: async (input) => {
      const root = await getRoot(input?.root);
      let values = (root?.[name] as unknown as Array<TType>) ?? [];
      let result = getFilter({ input, values })?.[0];
      result = merge([toPlainObject(input?.update) as unknown as TType, toPlainObject(result)]);
      values = values.map((v) => (toString(v._id) === toString(result._id) ? result : v));
      await getRootImplementation().update({
        id: [root._id],
        update: { [name]: values } as UpdateModel<TRoot>,
      });
      return { result, root };
    },
  });
};

// import { getFilter } from '@lib/backend/database/utils/Database/_Database';
// import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
// import {
//   type CreateEmbeddedResourceImplementationModel,
//   type CreateEmbeddedResourceImplementationParamsModel,
// } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation.models';
// import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
// import { getMetadata } from '@lib/backend/resource/utils/getMetadata/getMetadata';
// import { type PartialModel } from '@lib/shared/core/core.models';
// import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
// import { Container } from '@lib/shared/core/utils/Container/Container';
// import { pick } from '@lib/shared/core/utils/pick/pick';
// import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
// import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
// import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
// import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
// import { type ProjectModel } from '@lib/shared/resource/utils/Args/Args.models';
// import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
// import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
// import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
// import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
// import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';
// import forEach from 'lodash/forEach';
// import reduce from 'lodash/reduce';

// export const createEmbeddedResourceImplementation = <
//   TType extends EmbeddedResourceModel,
//   TForm,
//   TRoot extends EntityResourceModel,
//   TRootForm,
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
//   TForm,
//   TRoot,
//   TRootForm
// >): CreateEmbeddedResourceImplementationModel<TType, TForm, TRoot> => {
//   let rootImplementation: EntityResourceImplementationModel<TRoot, TRootForm>;

//   const getRootImplementation = (): EntityResourceImplementationModel<TRoot, TRootForm> => {
//     rootImplementation = rootImplementation ?? Container.get(RootImplementation);
//     return rootImplementation;
//   };

//   const getForm = async (form?: TForm): Promise<TType> => {
//     const formF = new Resource();
//     forEach(form as unknown as object, (v, k) => (formF[k as keyof typeof formF] = v));
//     await formF.beforeCreate?.();
//     return formF;
//   };

//   const getCount = async (input: RootInputModel<TRoot>): Promise<number> => {
//     if (input.root) {
//       const { result: rootResult } = await getRootImplementation().get({
//         filter: [{ field: '_id', value: input.root }],
//       });
//       const result = rootResult?.[name] as unknown as Array<TType>;
//       return result?.length || 0;
//     }
//     throw new InvalidArgumentError('root');
//   };

//   const getMany = async (
//     input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot> = {},
//   ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> => {
//     if (input.root) {
//       const skip = input.options?.skip ?? 0;
//       const limit = input.options?.take;
//       const { result: rootResult } = await getRootImplementation().get({
//         filter: [{ field: '_id', value: input.root }],
//         // options: input.filter ? { aggregate: aggregate({ ...input, name }) } : undefined,
//       });
//       const result =
//         ((rootResult && rootResult[name]) as unknown as Array<PartialModel<TType>>) ?? [];
//       return {
//         result:
//           (skip || limit) && result?.length
//             ? result.slice(skip, limit ? skip + (limit || 0) : undefined)
//             : result,
//         root: rootResult,
//       };
//     }
//     throw new InvalidArgumentError('root');
//   };

//   return createResourceImplementation<TType, TForm, TRoot>({
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
//     count: getCount,
//     create: async (input = {}) => {
//       const meta = getMetadata({ Resource: () => Resource });
//       if (input.root) {
//         const formF = await getForm(input.form);
//         const { result: rootResult } = await getRootImplementation().update({
//           filter: [
//             { field: '_id', value: input.root },
//             ...(meta.indices
//               ? meta.indices.map((index) => ({
//                   condition: FILTER_CONDITION.NOT_EQUAL,
//                   field: `${name}.${index}`,
//                   value: formF[index],
//                 }))
//               : []),
//           ],
//           // update: { $push: { [name]: formF } } as UpdateModel<TRoot>,
//         });
//         return { result: formF, root: rootResult };
//       }
//       throw new InvalidArgumentError('root');
//     },
//     createMany: async (input = {}) => {
//       if (input.root && input.form) {
//         const formF = await Promise.all(input.form.map((value) => getForm(value)));
//         const { result: rootResult } = await getRootImplementation().update({
//           filter: [{ field: '_id', value: input.root }],
//           // update: { $push: { [name]: { $each: formF } } } as UpdateModel<TRoot>,
//         });
//         return { result: formF, root: rootResult };
//       }
//       throw new InvalidArgumentError('root');
//     },
//     get: async (input = {}) => {
//       if (input.root) {
//         const { result: rootResult } = await getRootImplementation().get({
//           filter: [{ field: '_id', value: input.root }],
//           // options: { aggregate: aggregate({ ...input, name }) },
//         });
//         const result = rootResult?.[name] as unknown as Array<PartialModel<TType>>;
//         return { result: result?.[0], root: rootResult };
//       }
//       throw new InvalidArgumentError('root');
//     },
//     getConnection: async (input = {}) => {
//       if (input.root) {
//         return getConnection({
//           count: await getCount(input),
//           getMany: getMany.bind(this),
//           input,
//           pagination: input.pagination,
//         });
//       }
//       throw new InvalidArgumentError('root');
//     },
//     getMany,
//     name,
//     remove: async (input = {}) => {
//       const { result: rootResult } = await getRootImplementation().update({
//         filter: [{ field: '_id', value: input.root }],
//         // update: { $pull: { [name]: getFilter(input.filter) } } as UpdateModel<TRoot>,
//       });
//       return { root: rootResult };
//     },
//     search: async (input = {}) => {
//       if (input.root) {
//         const { result: rootResult } = await getRootImplementation().get({
//           filter: [{ field: '_id', value: input.root }],
//           // options: input.filter ? { aggregate: aggregate({ ...input, name }) } : undefined,
//         });
//         return {
//           result: undefined,
//           root: rootResult,
//         };
//       }
//       throw new InvalidArgumentError('root');
//     },
//     update: async (input = {}) => {
//       const { result: rootResult } = await getRootImplementation().update({
//         filter: [
//           { field: '_id', value: input.root },
//           ...(input.filter ?? []).map(
//             (filter) => ({ ...filter, field: `${name}.${filter.field}` }) as FilterModel<TRoot>,
//           ),
//         ],
//         options: {
//           project: {
//             [name]: { $elemMatch: getFilter(input.filter) },
//           } as unknown as ProjectModel<TRoot>,
//         },
//         update: reduce(
//           input.update as object,
//           (result, v, k) => ({
//             ...result,
//             ...(k.startsWith('$') ? { [k]: { [`${name}.$`]: v } } : { [`${name}.$.${k}`]: v }),
//           }),
//           {},
//         ),
//       });
//       const result = rootResult && (rootResult[name] as unknown as Array<PartialModel<TType>>);
//       let resultF = result?.length ? result[0] : undefined;
//       if (resultF && input.options?.project) {
//         resultF = pick(
//           resultF,
//           Object.keys(input.options.project),
//         ) as unknown as PartialModel<TType>;
//       }
//       return { result: resultF, root: rootResult };
//     },
//   });
// };
