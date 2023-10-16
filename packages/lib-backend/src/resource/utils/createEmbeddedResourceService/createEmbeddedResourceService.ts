import forEach from 'lodash/forEach';
import reduce from 'lodash/reduce';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { getConnection } from '#lib-backend/database/utils/getConnection/getConnection';
import {
  type CreateEmbeddedResourceServiceModel,
  type CreateEmbeddedResourceServiceParamsModel,
} from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService.models';
import { createResourceService } from '#lib-backend/resource/utils/createResourceService/createResourceService';
import { objectToEquality } from '#lib-backend/resource/utils/objectToEquality/objectToEquality';
import { type DeepKeyModel } from '#lib-shared/core/core.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { flattenObject } from '#lib-shared/core/utils/flattenObject/flattenObject';
import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';
import { pick } from '#lib-shared/core/utils/pick/pick';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import {
  type EntityResourceModel,
  type EntityResourcePartialModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type ProjectModel } from '#lib-shared/resource/utils/Args/Args.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type RootModel } from '#lib-shared/resource/utils/Root/Root.models';
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
  const beforeCreateF = async (
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
    context?: ContextModel,
  ): Promise<InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>> => {
    const value = new Resource();
    forEach(input.form as unknown as object, (v, k) => (value[k as keyof typeof value] = v));
    value.beforeCreate && (await value.beforeCreate());
    beforeCreate && (await beforeCreate({ input }, context));
    return { ...input, form: value as unknown as TForm };
  };

  const getAggregation = (
    input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>,
  ): Array<object> => {
    const nameF = `$${name}`;
    return filterNil([
      { $unwind: nameF },
      { $match: flattenObject({ [name]: input.filter }) },
      input.options?.project && { $project: flattenObject({ [name]: input.options.project }) },
      { $group: { _id: '$_id', [name]: { $push: nameF } } },
    ]);
  };

  const rootService = Container.get(RootService);

  const count = async (input?: RootModel<TRoot>): Promise<number> => {
    const { result: rootResult } = await rootService.get({
      filter: objectToEquality(input?.root),
    });
    const result = rootResult && (rootResult[name] as unknown as Array<TType>);
    return result?.length || 0;
  };

  const getMany = async (
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> => {
    const skip = input.options?.skip ?? 0;
    const limit = input.options?.take;
    const { result: rootResult } = await rootService.get({
      filter: objectToEquality(input.root),
      options: isEmpty(input.filter) ? {} : { aggregate: getAggregation(input) },
    });
    const result = rootResult && (rootResult[name] as unknown as Array<TType>);
    return {
      result:
        (skip || limit) && result?.length
          ? result.slice(skip, limit ? skip + (limit || 0) : undefined)
          : result,
      root: rootResult,
    };
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
    count,
    create: async (input, context) => {
      const inputF = await beforeCreateF(input, context);
      const value = inputF.form;
      const { result: rootResult } = await rootService.update({
        filter: objectToEquality(inputF.root),
        update: { $push: { [name]: value } } as UpdateModel<TRoot>,
      });
      return {
        result: value as unknown as EntityResourcePartialModel<TType>,
        root: rootResult,
      };
    },
    get: async (input) => {
      const { result: rootResult } = await rootService.get({
        filter: objectToEquality(input.root),
        options: { aggregate: getAggregation(input) },
      });
      const result = rootResult && (rootResult[name] as unknown as Array<TType>);
      return {
        result: result && result[0],
        root: rootResult,
      };
    },
    getConnection: async (input) => {
      const result = await getConnection({
        count: await count(input),
        getMany: getMany.bind(this),
        input,
        pagination: input.pagination,
      });
      return { result, root: input.root };
    },
    getMany,
    name,
    remove: async (input) => {
      const { result: rootResult } = await rootService.update({
        filter: objectToEquality(input.root),
        // update: { $pull: { [name]: input.filter } },
        update: {},
      });
      return { root: rootResult };
    },
    update: async (input) => {
      const { result: rootResult } = await rootService.update({
        filter: objectToEquality({ ...input.root, ...flattenObject({ [name]: input.filter }) }),
        options: {
          project: { [name]: { $elemMatch: input.filter } } as unknown as ProjectModel<TRoot>,
        },
        update: reduce(
          input.update as object,
          (result, v, k) => ({
            ...result,
            ...(k.startsWith('$')
              ? { [k]: flattenObject({ [`${name}.$`]: v }) }
              : flattenObject({ [`${name}.$`]: { [k]: v } })),
          }),
          {},
        ),
      });
      const result = rootResult && (rootResult[name] as unknown as Array<TType>);
      let resultF = result?.length ? result[0] : undefined;
      if (resultF && input.options?.project) {
        resultF = pick(
          resultF,
          Object.keys(input.options.project) as Array<DeepKeyModel<typeof resultF>>,
        ) as TType;
      }
      return { result: resultF, root: rootResult };
    },
  });
};
