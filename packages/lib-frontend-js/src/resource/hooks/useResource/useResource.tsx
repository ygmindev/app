import {
  type UseResourceModel,
  type UseResourceParamsModel,
} from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const useResource = <TType extends ResourceModel, TRoot = undefined>({
  afterCreate,
  afterCreateMany,
  afterGet,
  afterGetMany,
  afterRemove,
  afterUpdate,
  afterUpdateMany,
  beforeCreate,
  beforeCreateMany,
  beforeGet,
  beforeGetMany,
  beforeRemove,
  beforeUpdate,
  beforeUpdateMany,
  fields = [],
  name,
  root,
}: UseResourceParamsModel<TType, TRoot>): UseResourceModel<TType, TRoot> => {
  const { query: get } = useResourceMethod<RESOURCE_METHOD_TYPE.GET, TType, TRoot>({
    after: afterGet,
    // TODO: solution until Graphql oneOf / union input
    before: beforeGet,
    fields,
    method: RESOURCE_METHOD_TYPE.GET,
    name,
    root,
  });

  const { query: create } = useResourceMethod<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>({
    after: afterCreate,
    before: beforeCreate,
    fields,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name,
    root,
  });

  const { query: createMany } = useResourceMethod<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>({
    after: afterCreateMany,
    before: beforeCreateMany,
    fields,
    method: RESOURCE_METHOD_TYPE.CREATE_MANY,
    name,
    root,
  });

  const { query: getMany } = useResourceMethod<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>({
    after: afterGetMany,
    before: beforeGetMany,
    fields,
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name,
    root,
  });

  const { query: update } = useResourceMethod<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>({
    after: afterUpdate,
    before: beforeUpdate,
    fields,
    method: RESOURCE_METHOD_TYPE.UPDATE,
    name,
    root,
  });

  const { query: updateMany } = useResourceMethod<RESOURCE_METHOD_TYPE.UPDATE_MANY, TType, TRoot>({
    after: afterUpdateMany,
    before: beforeUpdateMany,
    fields,
    method: RESOURCE_METHOD_TYPE.UPDATE_MANY,
    name,
    root,
  });

  const { query: remove } = useResourceMethod<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>({
    after: afterRemove,
    before: beforeRemove,
    fields,
    method: RESOURCE_METHOD_TYPE.REMOVE,
    name,
    root,
  });

  const { query: search } = useResourceMethod<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot>({
    fields,
    method: RESOURCE_METHOD_TYPE.SEARCH,
    name,
    root,
  });

  return {
    create,

    createMany,

    get,

    getMany,

    name,

    remove,

    search,

    update,

    updateMany,
  };
};
