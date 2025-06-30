import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type UseLinkedUserResourceModel } from '@lib/frontend/user/hooks/useLinkedUserResource/useLinkedUserResource.models';
import { LINKED_USER_RESOURCE_PARAMS } from '@lib/frontend/user/resources/LinkedUser/LinkedUser.constants';
import { type LinkedUserModel } from '@lib/model/user/LinkedUser/LinkedUser.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export const useLinkedUserResource = (): UseLinkedUserResourceModel =>
  useResource<LinkedUserModel, UserModel>({
    ...LINKED_USER_RESOURCE_PARAMS,
  });
