import { type ContextModel } from '@lib/platform/core/core.models';
import { type AccessRoleModel } from '@lib/shared/auth/resources/Access/Access.models';

export type AuthorizeParamsModel = {
  context: ContextModel;
  roles?: Array<AccessRoleModel>;
};

export type AuthorizeModel = boolean;
