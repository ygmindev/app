import { type RequestContextModel } from '@lib/config/api/api.models';
import {
  type AccessRoleModel,
  type AccessRoleMoreModel,
} from '@lib/model/auth/Access/Access.models';

export type AuthorizeParamsModel = {
  context: RequestContextModel;
  roles?: Array<AccessRoleModel | AccessRoleMoreModel>;
};

export type AuthorizeModel = boolean;
