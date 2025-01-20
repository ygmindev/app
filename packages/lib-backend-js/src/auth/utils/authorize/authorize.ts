import { AccessImplementation } from '@lib/backend/auth/resources/Access/AccessImplementation/AccessImplementation';
import {
  type AuthorizeModel,
  type AuthorizeParamsModel,
} from '@lib/backend/auth/utils/authorize/authorize.models';
import { getTokenFromHeader } from '@lib/backend/auth/utils/getTokenFromHeader/getTokenFromHeader';
import { Container } from '@lib/backend/core/utils/Container/Container';
import { ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';
import { type AccessRoleMoreModel } from '@lib/shared/auth/resources/Access/Access.models';
import pullAt from 'lodash/pullAt';

export const authorize = async ({
  context,
  roles,
}: AuthorizeParamsModel): Promise<AuthorizeModel> => {
  if (roles?.length) {
    const rolesF = [...roles];
    const userIndex = rolesF.findIndex((v) => v === ACCESS_ROLE.USER);
    if (userIndex >= 0) {
      pullAt(rolesF, userIndex);
      const access = context.token?.access;
      if (access) {
        try {
          const user = await getTokenFromHeader(access);
          if (user) {
            context.user = user;
            const { result } = await Container.get(AccessImplementation).get({
              filter: [{ field: '_user', value: user._id }],
            });
            return result?.role
              ? (rolesF as Array<AccessRoleMoreModel>).every((v) => result.role?.includes(v))
              : false;
          }
        } catch (e) {
          console.warn(e);
          return false;
        }
        return false;
      }
      return false;
    }
    return false;
  }
  return false;
};
