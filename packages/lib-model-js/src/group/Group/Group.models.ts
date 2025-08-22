import { type ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { type ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { type RoleModel } from '@lib/model/auth/Role/Role.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type GroupModel = EntityResourceModel & {
  [ACCESS_RESOURCE_NAME]?: PartialArrayModel<AccessModel>;

  [ROLE_RESOURCE_NAME]?: PartialArrayModel<RoleModel>;

  logo?: string;

  name: string;

  types?: Array<GROUP_TYPE>;
};

export enum GROUP_TYPE {}
