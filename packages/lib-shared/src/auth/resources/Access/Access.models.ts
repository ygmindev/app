import {
  type ACCESS_LEVEL,
  type ACCESS_ROLE,
  type ACCESS_ROLE_MORE,
} from '@lib/shared/auth/resources/Access/Access.constants';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type AccessRoleModel = `${ACCESS_ROLE}`;

export type AccessRoleMoreModel = `${ACCESS_ROLE_MORE}`;

export type AccessLevelModel = `${ACCESS_LEVEL}`;

export type AccessModel = ProtectedResourceModel & {
  role: Array<AccessRoleMoreModel>;
};

export type AccessFormModel = EntityResourceDataModel<AccessModel>;
