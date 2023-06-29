import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type LINKED_USER_TYPE } from '#lib-shared/user/resources/LinkedUser/LinkedUser.constants';

export type LinkedUserTypeModel = `${LINKED_USER_TYPE}`;

export type LinkedUserModel = {
  id: string;
  type: LinkedUserTypeModel;
} & EmbeddedResourceModel;

export type LinkedUserFormModel = EntityResourceDataModel<LinkedUserModel>;
