import type {
  EntityResourceDataModel,
  EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import type { LinkedUserModel } from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';

export interface UserModel extends EntityResourceModel {
  [LINKED_USER_RESOURCE_NAME]?: Array<LinkedUserModel>;

  email?: string;

  first?: string;

  last?: string;

  phone?: string;
}

export interface UserFormModel extends EntityResourceDataModel<UserModel> {}
