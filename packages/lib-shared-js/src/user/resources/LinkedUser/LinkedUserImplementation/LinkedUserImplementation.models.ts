import { type EmbeddedResourceImplementationModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import { type LinkedUserModel } from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type LinkedUserImplementationModel = EmbeddedResourceImplementationModel<
  LinkedUserModel,
  UserModel
>;
