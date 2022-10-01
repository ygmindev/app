import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { LINKED_USER_TYPE } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';

export type LinkedUserTypeModel = `${LINKED_USER_TYPE}`;

export interface LinkedUserModel extends EmbeddedResourceModel {
  id: string;
  type: LinkedUserTypeModel;
}
