import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import type { UseUserResourceModel } from '@lib/frontend/user/hooks/useUserResource/useUserResource.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';

export const useUserResource = (): UseUserResourceModel => {
  const { query: get } = useResourceMethod<RESOURCE_METHOD_TYPE.GET, UserModel, UserFormModel>({
    fields: [{ result: ['_id'] }],
    method: RESOURCE_METHOD_TYPE.GET,
    name: USER_RESOURCE_NAME,
  });

  return {
    get,
  };
};
