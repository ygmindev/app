import { type RequestContextModel } from '@lib/config/api/api.models';
import { type AccessRoleModel } from '@lib/shared/auth/resources/Access/Access.models';

export type AuthorizeParamsModel = {
  context: RequestContextModel;
  roles?: Array<AccessRoleModel>;
};

export type AuthorizeModel = boolean;
