import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { type ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { type RoleModel } from '@lib/model/auth/Role/Role.models';
import { type GROUP_TYPE } from '@lib/model/group/Group/Group.constants';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type GroupModel = EntityResourceModel & {
  [ACCESS_RESOURCE_NAME]?: CollectionModel<AccessModel>;

  [ROLE_RESOURCE_NAME]?: CollectionModel<RoleModel>;

  logo?: string;

  name: string;

  types?: Array<GROUP_TYPE>;
};
