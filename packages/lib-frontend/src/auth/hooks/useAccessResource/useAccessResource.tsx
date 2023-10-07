import { ACCESS_FIELDS } from '#lib-frontend/auth/hooks/useAccessResource/useAccessResource.constants';
import { type UseAccessResourceModel } from '#lib-frontend/auth/hooks/useAccessResource/useAccessResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
} from '#lib-shared/auth/resources/Access/Access.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';

export const useAccessResource = (): UseAccessResourceModel => {
  const { query: getManyUser } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET_MANY,
    AccessModel,
    AccessFormModel
  >({
    fields: [{ result: ACCESS_FIELDS }],
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name: `${ACCESS_RESOURCE_NAME}${RESOURCE_METHOD_TYPE.GET_MANY}User`,
  });
  return {
    ...useResource<AccessModel, AccessFormModel>({
      fields: [{ result: ACCESS_FIELDS }],
      name: ACCESS_RESOURCE_NAME,
    }),

    getManyUser,
  };
};
