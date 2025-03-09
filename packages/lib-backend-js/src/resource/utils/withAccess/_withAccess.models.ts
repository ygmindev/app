import {
  type AccessRoleModel,
  type AccessRoleMoreModel,
} from '@lib/shared/auth/resources/Access/Access.models';

export type _WithAccessParamsModel = Array<AccessRoleModel | AccessRoleMoreModel>;

export type _WithAccessModel = PropertyDecorator & MethodDecorator;
