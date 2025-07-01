import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import {
  type UseResourceModel,
  type UseResourceParamsModel,
} from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { type UseResourceMethodParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type ResourceFieldsModel } from '@lib/frontend/resource/resource.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export const toGraphqlParamsFields = <TType,>(
  fields?: ResourceFieldsModel<TType>,
): GraphqlQueryParamsFieldsModel<TType> =>
  (fields?.map((field) =>
    field.fields ? { [field.id]: toGraphqlParamsFields(field.fields) } : field.id,
  ) as GraphqlQueryParamsFieldsModel<TType>) ?? [];

export const useResource = <TType extends EntityResourceModel, TRoot = undefined>({
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
  fields,
  name,
  root,
}: UseResourceParamsModel<TType, TRoot>): UseResourceModel<TType, TRoot> => {
  const fieldsF = toGraphqlParamsFields<TType>([
    { id: '_id' as StringKeyModel<TType> },
    ...(fields ?? []),
  ]);

  const { query: get } = useResourceMethod<RESOURCE_METHOD_TYPE.GET, TType, TRoot>({
    after: afterGet,
    // TODO: solution until Graphql oneOf / union input
    before: beforeGet,
    fields: [{ result: fieldsF }] as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.GET,
      TType,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.GET,
    name,
    root,
  });

  const { query: create } = useResourceMethod<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>({
    after: afterCreate,
    before: beforeCreate,
    fields: [{ result: fieldsF }] as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.CREATE,
      TType,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name,
    root,
  });

  const { query: createMany } = useResourceMethod<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>({
    after: afterCreateMany,
    before: beforeCreateMany,
    fields: [{ result: fieldsF }] as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.CREATE_MANY,
      TType,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.CREATE_MANY,
    name,
    root,
  });

  const { query: getMany } = useResourceMethod<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>({
    after: afterGetMany,
    before: beforeGetMany,
    fields: [{ result: fieldsF }] as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      TType,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name,
    root,
  });

  const { query: update } = useResourceMethod<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>({
    after: afterUpdate,
    before: beforeUpdate,
    fields: [{ result: fieldsF }] as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      TType,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.UPDATE,
    name,
    root,
  });

  const { query: remove } = useResourceMethod<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>({
    after: afterRemove,
    before: beforeRemove,
    fields: [{ result: fieldsF }] as unknown as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.REMOVE,
      TType,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.REMOVE,
    name,
    root,
  });

  const { query: search } = useResourceMethod<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot>({
    after: afterSearch,
    before: beforeSearch,
    fields: [{ result: fieldsF }] as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.SEARCH,
      TType,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.SEARCH,
    name,
    root,
  });

  const { query: getConnection } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TRoot
  >({
    after: afterGetConnection,
    before: beforeGetConnection,
    fields: [{ result: fieldsF }] as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      TType,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
    name,
    root,
  });

  return {
    create,

    createMany,

    get,

    getConnection,

    getMany,

    remove,

    search,

    update,
  };
};
