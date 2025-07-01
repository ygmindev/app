import {
  type AuthorizeModel,
  type AuthorizeParamsModel,
} from '@lib/backend/auth/utils/authorize/authorize.models';
import { getTokenFromHeader } from '@lib/backend/auth/utils/getTokenFromHeader/getTokenFromHeader';
import { ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';
import { AccessImplementation } from '@lib/model/auth/Access/AccessImplementation/AccessImplementation';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';
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
            if (!rolesF.length) {
              return true;
            }
            const { result } = await Container.get(AccessImplementation).get({
              filter: [{ field: '_user', value: user._id }],
            });
            return result?.[ROLE_RESOURCE_NAME]
              ? rolesF.every((v) => result[ROLE_RESOURCE_NAME]?.includes(v))
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
