import { type EmbeddedResourceImplementationModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import { type LinkedUserModel } from '@lib/model/user/LinkedUser/LinkedUser.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type LinkedUserImplementationModel = EmbeddedResourceImplementationModel<
  LinkedUserModel,
  UserModel
>;
