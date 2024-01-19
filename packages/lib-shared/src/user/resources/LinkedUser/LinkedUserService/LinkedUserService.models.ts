import { type EmbeddedResourceServiceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import {
  type LinkedUserFormModel,
  type LinkedUserModel,
} from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type LinkedUserServiceModel = EmbeddedResourceServiceModel<
  LinkedUserModel,
  LinkedUserFormModel,
  UserModel
>;
