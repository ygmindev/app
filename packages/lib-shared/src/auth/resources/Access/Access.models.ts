import type { ACCESS_LEVEL, ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';
import type {
  EntityResourceDataModel,
  EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type AccessRoleModel = `${ACCESS_ROLE}`;

export type AccessLevelModel = `${ACCESS_LEVEL}`;

export interface AccessModel extends EntityResourceModel {
  _uid: string;
  email?: string;
  role: AccessRoleModel;
}

export interface AccessFormModel extends EntityResourceDataModel<AccessModel> {}
