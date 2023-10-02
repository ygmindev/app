import {
  type UseResourceModel,
  type UseResourceParamsModel,
} from '#lib-frontend/resource/hooks/useResource/useResource.models';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { type UseResourceMethodParamsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export const useResource = <TType, TForm = EntityResourceDataModel<TType>, TRoot = undefined>({
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
  fields,
  name,
  root,
}: UseResourceParamsModel<TType, TForm, TRoot>): UseResourceModel<TType, TForm, TRoot> => {
  const { query: get } = useResourceMethod<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>({
    after: afterGet,
    before: beforeGet,
    fields: fields as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.GET,
      TType,
      TForm,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.GET,
    name,
    root,
  });

  const { query: create } = useResourceMethod<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>({
    after: afterCreate,
    before: beforeCreate,
    fields: fields as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.CREATE,
      TType,
      TForm,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name,
    root,
  });

  const { query: getMany } = useResourceMethod<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>({
    after: afterGetMany,
    before: beforeGetMany,
    fields: fields as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      TType,
      TForm,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name,
    root,
  });

  const { query: update } = useResourceMethod<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot>({
    after: afterUpdate,
    before: beforeUpdate,
    fields: fields as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      TType,
      TForm,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.UPDATE,
    name,
  });

  const { query: remove } = useResourceMethod<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm, TRoot>({
    after: afterRemove,
    before: beforeRemove,
    fields: fields as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.REMOVE,
      TType,
      TForm,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.REMOVE,
    name,
  });

  const { query: getConnection } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TForm,
    TRoot
  >({
    after: afterGetConnection,
    before: beforeGetConnection,
    fields: fields as UseResourceMethodParamsModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      TType,
      TForm,
      TRoot
    >['fields'],
    method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
    name,
  });

  return {
    create,

    get,

    getConnection,

    getMany,

    remove,

    update,
  };
};
