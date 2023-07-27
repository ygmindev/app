import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { LINKED_USER_FIELDS } from '#lib-frontend/user/hooks/useLinkedUserResource/useLinkedUserResource.constants';
import {
  type UseLinkedUserResourceModel,
  type UseLinkedUserResourceParamsModel,
} from '#lib-frontend/user/hooks/useLinkedUserResource/useLinkedUserResource.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { LINKED_USER_RESOURCE_NAME } from '#lib-shared/user/resources/LinkedUser/LinkedUser.constants';
import {
  type LinkedUserFormModel,
  type LinkedUserModel,
} from '#lib-shared/user/resources/LinkedUser/LinkedUser.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const useLinkedUserResource = ({
  root,
}: UseLinkedUserResourceParamsModel = {}): UseLinkedUserResourceModel => {
  const { query: get } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET,
    LinkedUserModel,
    LinkedUserFormModel,
    UserModel
  >({
    fields: [{ result: LINKED_USER_FIELDS }],
    method: RESOURCE_METHOD_TYPE.GET,
    name: LINKED_USER_RESOURCE_NAME,
    root,
  });

  return {
    get,
  };
};
