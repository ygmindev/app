import { AccessImplementation } from '@lib/backend/auth/resources/Access/AccessImplementation/AccessImplementation';
import {
  type AuthorizeModel,
  type AuthorizeParamsModel,
} from '@lib/backend/auth/utils/authorize/authorize.models';
import { Container } from '@lib/backend/core/utils/Container/Container';
import { ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';
import { type AccessRoleMoreModel } from '@lib/shared/auth/resources/Access/Access.models';
import pullAt from 'lodash/pullAt';

export const authorize = async ({
  context,
  roles,
}: AuthorizeParamsModel): Promise<AuthorizeModel> => {
  if (roles?.length) {
    const userIndex = roles.findIndex((v) => v === ACCESS_ROLE.USER);
    if (userIndex >= 0) {
      pullAt(roles, userIndex);
      if (context.user) {
        const { result } = await Container.get(AccessImplementation).get({
          filter: [{ field: '_user', value: context.user._id }],
        });
        return result?.role
          ? (roles as Array<AccessRoleMoreModel>).every((v) => result.role?.includes(v))
          : false;
      }
      return false;
    }
    return false;
  }
  return false;
};
