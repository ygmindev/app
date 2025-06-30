import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type LINKED_USER_TYPE } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';

export type LinkedUserTypeModel = `${LINKED_USER_TYPE}`;

export type LinkedUserModel = EntityResourceModel & {
  externalId: string;

  type: LinkedUserTypeModel;
};
