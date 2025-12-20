import {
  type UseProtectedResourceModel,
  type UseProtectedResourceParamsModel,
} from '@lib/frontend/auth/hooks/useProtectedResource/useProtectedResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { type ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const useProtectedResource = <TType extends ProtectedResourceModel>({
  fields = [],
  name,
  root,
  ...params
}: UseProtectedResourceParamsModel<TType>): UseProtectedResourceModel<TType> => {
  const { query: getManyProtected } = useResourceMethod<RESOURCE_METHOD_TYPE.GET_MANY, TType>({
    fields,
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name: `${name}${RESOURCE_METHOD_TYPE.GET_MANY}Protected`,
  });

  return {
    ...useResource<TType>({ ...params, fields, name, root }),

    getManyProtected,
  };
};
