import { _withAccess } from '@lib/backend/resource/utils/withAccess/_withAccess';
import {
  type WithAccessModel,
  type WithAccessParamsModel,
} from '@lib/backend/resource/utils/withAccess/withAccess.models';
import {
  ACCESS_LEVEL,
  ACCESS_ROLE,
  ACCESS_ROLE_MORE,
} from '@lib/shared/auth/resources/Access/Access.constants';
import {
  type AccessLevelModel,
  type AccessRoleModel,
  type AccessRoleMoreModel,
} from '@lib/shared/auth/resources/Access/Access.models';
import { withCondition } from '@lib/shared/core/utils/withCondition/withCondition';

// TODO: should come from database?
export const getAccessRole = (
  access: AccessLevelModel,
): Array<AccessRoleModel | AccessRoleMoreModel> => {
  switch (access) {
    case ACCESS_LEVEL.RESTRICTED:
      return [ACCESS_ROLE_MORE.ADMIN];
    case ACCESS_LEVEL.PROTECTED:
      return [ACCESS_ROLE.USER];
    default:
      return [];
  }
};

export const withAccess = (
  { access = ACCESS_LEVEL.RESTRICTED }: WithAccessParamsModel = { access: ACCESS_LEVEL.RESTRICTED },
): WithAccessModel =>
  withCondition(
    () => access !== ACCESS_LEVEL.PUBLIC,
    () => _withAccess(getAccessRole(access)),
  );
