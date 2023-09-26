import { type ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import { type AccessModel } from '#lib-shared/auth/resources/Access/Access.models';
import { type GROUP_TYPE } from '#lib-shared/group/resources/Group/Group.constants';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type GroupModel = EntityResourceModel & {
  [ACCESS_RESOURCE_NAME]?: Array<AccessModel>;

  name: string;

  profileImage?: string;

  types?: Array<GroupTypeModel>;
};

export type GroupFormModel = EntityResourceDataModel<GroupModel>;

export type GroupTypeModel = `${GROUP_TYPE}`;
