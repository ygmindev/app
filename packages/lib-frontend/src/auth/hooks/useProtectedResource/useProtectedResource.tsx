import {
  type UseProtectedResourceModel,
  type UseProtectedResourceParamsModel,
} from '#lib-frontend/auth/hooks/useProtectedResource/useProtectedResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { type UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type ProtectedResourceModel } from '#lib-shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export const useProtectedResource = <
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
>({
  ...params
}: UseProtectedResourceParamsModel<TType, TForm>): UseProtectedResourceModel<TType, TForm> => {
  const { query: getManyProtected } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET_MANY,
    TType,
    TForm
  >({
    fields: params.fields as UseResourceMethodParamsFieldsModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      TType
    >,
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name: `${params.name}${RESOURCE_METHOD_TYPE.GET_MANY}Protected`,
  });

  return {
    ...useResource<TType, TForm>({
      fields: params.fields,
      name: params.name,
    }),

    getManyProtected,
  };
};
