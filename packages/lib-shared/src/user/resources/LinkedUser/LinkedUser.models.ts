import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type LINKED_USER_TYPE } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import { type USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type LinkedUserTypeModel = `${LINKED_USER_TYPE}`;

export type LinkedUserModel = EmbeddedResourceModel & {
  [USER_RESOURCE_NAME]?: UserModel;

  externalId: string;

  type: LinkedUserTypeModel;
};

export type LinkedUserFormModel = EntityResourceDataModel<LinkedUserModel>;
