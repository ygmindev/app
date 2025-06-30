import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { type RepositoryModel } from '@lib/backend/database/utils/Database/Database.models';
import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import {
  type CreateRelatedResourceImplementationModel,
  type CreateRelatedResourceImplementationParamsModel,
} from '@lib/backend/resource/utils/createRelatedResourceImplementation/createRelatedResourceImplementation.models';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { type PartialModel } from '@lib/shared/core/core.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/model/core/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import forEach from 'lodash/forEach';

export const createRelatedResourceImplementation = <
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
  root,
}: CreateRelatedResourceImplementationParamsModel<
  TType,
  TRoot
>): CreateRelatedResourceImplementationModel<TType, TRoot> => {
  let rootImplementation: EntityResourceImplementationModel<TRoot>;

  const getRootImplementation = (): EntityResourceImplementationModel<TRoot> => {
    rootImplementation = rootImplementation ?? Container.get(RootImplementation);
    return rootImplementation;
  };

  const getRepository = (): RepositoryModel<TType> =>
    Container.get(Database, DATABASE_TYPE.MONGO).getRepository({ name: Resource });

  const getForm = async (form?: EntityResourceDataModel<TType>): Promise<TType> => {
    const formF = new Resource();
    forEach(form as unknown as object, (v, k) => (formF[k as keyof typeof formF] = v));
    formF._id = formF._id ?? new ObjectId();
    formF.created = formF.created ?? new Date();
    await formF.beforeCreate?.();
    return formF;
  };

  const getFilter = <
    TMethod extends
      | RESOURCE_METHOD_TYPE.GET
      | RESOURCE_METHOD_TYPE.GET_MANY
      | RESOURCE_METHOD_TYPE.GET_CONNECTION
      | RESOURCE_METHOD_TYPE.REMOVE
      | RESOURCE_METHOD_TYPE.UPDATE,
  >(
    input?: ResourceInputModel<TMethod, TType, TRoot>,
  ): Array<FilterModel<TType>> =>
    filterNil([
      ...(input?.filter ?? []),
      input?.root && { field: root, value: new ObjectId(input.root) },
    ]) as Array<FilterModel<TType>>;

  const getMany = async (
    input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot> = {},
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> => {
    return getRepository().getMany({ filter: getFilter(input), options: input.options });
  };

  const create = async (
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> => {
    if (input?.root) {
      const form = await getForm(input.form);
      const { result: rootResult } = await getRootImplementation().update({
        id: [input.root],
        update: { [name]: form } as PartialModel<EntityResourceDataModel<TRoot>>,
      });
      return { result: form, root: rootResult };
    }
    throw new InvalidArgumentError('root');
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
    count: (input) => getRepository().count(input?.filter),
    create,
    createMany: async (input) => {
      if (input?.root) {
        const result = filterNil(
          await Promise.all(
            input.form?.map(
              async (value) => (await create({ form: value, root: input.root })).result,
            ) ?? [],
          ),
        );
        return { result };
      }
      throw new InvalidArgumentError('root');
    },

    get: async (input) => getRepository().get({ filter: getFilter(input), id: input?.id }),

    getConnection: async (input) => {
      return getConnection({
        count: await getRepository().count(getFilter(input)),
        getMany: getMany.bind(this),
        input,
        pagination: input?.pagination,
      });
    },

    getMany,

    name,

    remove: async (input) => {
      const { result } = await getRepository().remove({ filter: getFilter(input), id: input?.id });
      return { result };
    },

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
      const { result } = await getRepository().update({
        filter: getFilter(input),
        id: input?.id,
        update: input?.update,
      });
      return { result };
    },
  });
};
