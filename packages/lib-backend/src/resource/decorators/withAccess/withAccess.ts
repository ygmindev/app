import type { WithAccessParamsModel } from '@lib/backend/resource/decorators/withAccess/withAccess.models';
import { ACCESS_LEVEL, ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';
import type {
  AccessLevelModel,
  AccessRoleModel,
} from '@lib/shared/auth/resources/Access/Access.models';
import { withCondition } from '@lib/shared/core/decorators/withCondition/withCondition';
import { Authorized } from 'type-graphql';

export const getAccessRole = (level: AccessLevelModel): Array<AccessRoleModel> => {
  switch (level) {
    case ACCESS_LEVEL.PROHIBITED:
      return [];
    case ACCESS_LEVEL.RESTRICTED:
      return [ACCESS_ROLE.ADMIN];
    case ACCESS_LEVEL.PROTECTED:
      return [ACCESS_ROLE.USER];
    default:
      return [ACCESS_ROLE.ANY];
  }
};

export const withAccess = ({
  level = ACCESS_LEVEL.PUBLIC,
}: WithAccessParamsModel): PropertyDecorator & MethodDecorator =>
  withCondition(level !== ACCESS_LEVEL.PUBLIC, Authorized(getAccessRole(level)));
