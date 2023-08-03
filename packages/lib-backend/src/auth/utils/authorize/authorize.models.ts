import { type AccessRoleModel } from '#lib-shared/auth/resources/Access/Access.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';

export type AuthorizeParamsModel = {
  context: ContextModel;
  roles?: Array<AccessRoleModel>;
};

export type AuthorizeModel = boolean;
