import {
  type AccessRoleModel,
  type AccessRoleMoreModel,
} from '@lib/model/auth/Access/Access.models';

export type _WithAccessParamsModel = Array<AccessRoleModel | AccessRoleMoreModel>;

export type _WithAccessModel = PropertyDecorator & MethodDecorator;
