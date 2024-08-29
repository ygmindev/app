import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type UseLinkedUserResourceModel } from '@lib/frontend/user/hooks/useLinkedUserResource/useLinkedUserResource.models';
import { LINKED_USER_RESOURCE_PARAMS } from '@lib/frontend/user/resources/LinkedUser/LinkedUser.constants';
import {
  type LinkedUserFormModel,
  type LinkedUserModel,
} from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const useLinkedUserResource = (): UseLinkedUserResourceModel =>
  useResource<LinkedUserModel, LinkedUserFormModel, UserModel>({
    ...LINKED_USER_RESOURCE_PARAMS,
  });
