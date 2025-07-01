import { _withAccess } from '@lib/backend/resource/utils/withAccess/_withAccess';
import {
  type WithAccessModel,
  type WithAccessParamsModel,
} from '@lib/backend/resource/utils/withAccess/withAccess.models';
import { ACCESS_LEVEL, ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';
import { withCondition } from '@lib/shared/core/utils/withCondition/withCondition';

// TODO: should come from database?
export const getAccessRole = (access: ACCESS_LEVEL): Array<ACCESS_ROLE> => {
  switch (access) {
    case ACCESS_LEVEL.RESTRICTED:
      return [ACCESS_ROLE.ADMIN];
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
