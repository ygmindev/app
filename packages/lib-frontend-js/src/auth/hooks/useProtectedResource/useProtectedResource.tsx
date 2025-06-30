import {
  type UseProtectedResourceModel,
  type UseProtectedResourceParamsModel,
} from '@lib/frontend/auth/hooks/useProtectedResource/useProtectedResource.models';
import {
  toGraphqlParamsFields,
  useResource,
} from '@lib/frontend/resource/hooks/useResource/useResource';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { type UseResourceMethodParamsFieldsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';

export const useProtectedResource = <TType extends ProtectedResourceModel>({
  fields,
  name,
  root,
  ...params
}: UseProtectedResourceParamsModel<TType>): UseProtectedResourceModel<TType> => {
  const fieldsF = toGraphqlParamsFields<TType>(fields);
  const { query: getManyProtected } = useResourceMethod<RESOURCE_METHOD_TYPE.GET_MANY, TType>({
    fields: [{ result: fieldsF }] as UseResourceMethodParamsFieldsModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      TType
    >,
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name: `${name}${RESOURCE_METHOD_TYPE.GET_MANY}Protected`,
  });

  return {
    ...useResource<TType>({ ...params, fields, name, root }),

    getManyProtected,
  };
};
