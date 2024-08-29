import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import { type LinkedUserModel } from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const LINKED_USER_RESOURCE_PARAMS = {
  fields: [],
  name: LINKED_USER_RESOURCE_NAME,
  rootName: USER_RESOURCE_NAME,
} satisfies ResourceParamsModel<LinkedUserModel, UserModel>;
