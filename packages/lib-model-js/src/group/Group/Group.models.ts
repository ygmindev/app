import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { type AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import { type ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { type RoleModel } from '@lib/shared/auth/resources/Role/Role.models';

export enum GROUP_TYPE {}

export type GroupModel = EntityResourceModel & {
  [ACCESS_RESOURCE_NAME]?: CollectionModel<AccessModel>;

  [ROLE_RESOURCE_NAME]?: CollectionModel<RoleModel>;

  logo?: string;

  name: string;

  types?: Array<GROUP_TYPE>;
};
