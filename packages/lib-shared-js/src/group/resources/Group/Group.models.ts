import { type CollectionModel } from '@lib/model/core/Collection/Collection.models';
import { type ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { type AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import { type ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { type RoleModel } from '@lib/shared/auth/resources/Role/Role.models';
import { type GROUP_TYPE } from '@lib/shared/group/resources/Group/Group.constants';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export type GroupModel = EntityResourceModel & {
  [ACCESS_RESOURCE_NAME]?: CollectionModel<AccessModel>;

  [ROLE_RESOURCE_NAME]?: CollectionModel<RoleModel>;

  logo?: string;

  name: string;

  types?: Array<GroupTypeModel>;
};

export type GroupTypeModel = `${GROUP_TYPE}`;
