import { type ProtectedResourceModel } from '#lib-shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type GROUP_TYPE } from '#lib-shared/group/resources/Group/Group.constants';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type GroupModel = ProtectedResourceModel & {
  logo?: string;

  name: string;

  types?: Array<GroupTypeModel>;
};

export type GroupFormModel = EntityResourceDataModel<GroupModel>;

export type GroupTypeModel = `${GROUP_TYPE}`;
