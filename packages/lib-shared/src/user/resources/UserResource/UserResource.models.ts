import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type UserResourceModel = EntityResourceModel & {
  [USER_RESOURCE_NAME]: UserModel;
};
