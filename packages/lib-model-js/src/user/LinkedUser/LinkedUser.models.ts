import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type LINKED_USER_TYPE } from '@lib/model/user/LinkedUser/LinkedUser.constants';

export type LinkedUserModel = EntityResourceModel & {
  externalId: string;

  type: LINKED_USER_TYPE;
};
