import type { EntityResourcePartialModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export interface UserStateModel {
  currentUser?: EntityResourcePartialModel<UserModel> | null;
}
