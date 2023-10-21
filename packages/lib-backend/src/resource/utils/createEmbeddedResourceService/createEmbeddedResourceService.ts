import forEach from 'lodash/forEach';
import reduce from 'lodash/reduce';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { getFilter } from '#lib-backend/database/utils/Database/_Database';
import { getConnection } from '#lib-backend/database/utils/getConnection/getConnection';
import {
  type CreateEmbeddedResourceServiceModel,
  type CreateEmbeddedResourceServiceParamsModel,
} from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService.models';
import { createResourceService } from '#lib-backend/resource/utils/createResourceService/createResourceService';
import { type PartialModel } from '#lib-shared/core/core.models';
import { InvalidArgumentError } from '#lib-shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { flattenObject } from '#lib-shared/core/utils/flattenObject/flattenObject';
import { pick } from '#lib-shared/core/utils/pick/pick';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import { type ProjectModel } from '#lib-shared/resource/utils/Args/Args.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type RootInputModel } from '#lib-shared/resource/utils/Root/Root.models';
import { type UpdateModel } from '#lib-shared/resource/utils/Update/Update.models';

export const createEmbeddedResourceService = <
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
  TRootForm,
>({
  Resource,
  RootService,
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
}: CreateEmbeddedResourceServiceParamsModel<
  TType,
  TForm,
  TRoot,
  TRootForm
>): CreateEmbeddedResourceServiceModel<TType, TForm, TRoot> => {
  let rootService: EntityResourceServiceModel<TRoot, TRootForm>;
  const getRootService = (): EntityResourceServiceModel<TRoot, TRootForm> => {
    rootService = rootService ?? Container.get(RootService);
    return rootService;
  };

  const beforeCreateF = async (
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm>,
    context?: ContextModel,
  ): Promise<InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm>> => {
    const value = new Resource();
    forEach(input.form as unknown as object, (v, k) => (value[k as keyof typeof value] = v));
    value.beforeCreate && (await value.beforeCreate());
    beforeCreate && (await beforeCreate({ input }, context));
    return { ...input, form: value as unknown as TForm };
  };

  const getAggregation = (
    input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TForm>,
  ): Array<object> => {
    const nameF = `$${name}`;
    return filterNil([
      { $unwind: nameF },
      { $match: getFilter(input.filter, name) },
      input.options?.project && { $project: flattenObject({ [name]: input.options.project }) },
      { $group: { _id: '$_id', [name]: { $push: nameF } } },
    ]);
  };

  const getCount = async (input: RootInputModel): Promise<number> => {
    if (input.root) {
      const { result: rootResult } = await getRootService().get({
        filter: [{ field: '_id', value: input.root }],
      });
      const result = rootResult && (rootResult[name] as unknown as Array<TType>);
      return result?.length || 0;
    }
    throw new InvalidArgumentError('root');
  };

  const getMany = async (
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> => {
    if (input.root) {
      const skip = input.options?.skip ?? 0;
      const limit = input.options?.take;
      const { result: rootResult } = await getRootService().get({
        filter: [{ field: '_id', value: input.root }],
        options: input.filter ? { aggregate: getAggregation(input) } : undefined,
      });
      const result =
        ((rootResult && rootResult[name]) as unknown as Array<PartialModel<TType>>) ?? [];
      return {
        result:
          (skip || limit) && result?.length
            ? result.slice(skip, limit ? skip + (limit || 0) : undefined)
            : result,
        root: rootResult,
      };
    }
    throw new InvalidArgumentError('root');
  };

  return createResourceService<TType, TForm, TRoot>({
    Resource,
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
    count: getCount,
    create: async (input, context) => {
      if (input.root) {
        const inputF = await beforeCreateF(input, context);
        const value = inputF.form as PartialModel<TType>;
        const { result: rootResult } = await getRootService().update({
          filter: [{ field: '_id', value: input.root }],
          update: { $push: { [name]: value } } as UpdateModel<TRoot>,
        });
        return { result: value, root: rootResult };
      }
      throw new InvalidArgumentError('root');
    },
    get: async (input) => {
      if (input.root) {
        const { result: rootResult } = await getRootService().get({
          filter: [{ field: '_id', value: input.root }],
          options: { aggregate: getAggregation(input) },
        });
        const result = rootResult && (rootResult[name] as unknown as Array<PartialModel<TType>>);
        return { result: result && result[0], root: rootResult };
      }
      throw new InvalidArgumentError('root');
    },
    getConnection: async (input) => {
      if (input.root) {
        return getConnection({
          count: await getCount(input),
          getMany: getMany.bind(this),
          input,
          pagination: input.pagination,
        });
      }
      throw new InvalidArgumentError('root');
    },
    getMany,
    name,
    remove: async (input) => {
      const { result: rootResult } = await getRootService().update({
        filter: [{ field: '_id', value: input.root }],
        update: { $pull: { [name]: getFilter(input.filter) } } as UpdateModel<TRoot>,
      });
      return { root: rootResult };
    },
    update: async (input) => {
      const { result: rootResult } = await getRootService().update({
        filter: [
          { field: '_id', value: input.root },
          ...input.filter?.map(
            (filter) =>
              ({ ...filter, field: `${name}.${filter.field as string}` }) as FilterModel<TRoot>,
          ),
        ],
        options: {
          project: {
            [name]: { $elemMatch: getFilter(input.filter) },
          } as unknown as ProjectModel<TRoot>,
        },
        update: reduce(
          input.update as object,
          (result, v, k) => ({
            ...result,
            ...(k.startsWith('$') ? { [k]: { [`${name}.$`]: v } } : { [`${name}.$.${k}`]: v }),
          }),
          {},
        ),
      });
      const result = rootResult && (rootResult[name] as unknown as Array<PartialModel<TType>>);
      let resultF = result?.length ? result[0] : undefined;
      if (resultF && input.options?.project) {
        resultF = pick(
          resultF,
          Object.keys(input.options.project),
        ) as unknown as PartialModel<TType>;
      }
      return { result: resultF, root: rootResult };
    },
  });
};
