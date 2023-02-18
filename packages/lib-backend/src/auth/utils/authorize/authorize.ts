import { AccessService } from '@lib/backend/auth/resources/Access/AccessService/AccessService';
import type { AuthorizeParamsModel } from '@lib/backend/auth/utils/authorize/authorize.models';
import { ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';

export const authorize = async ({ context, roles }: AuthorizeParamsModel): Promise<boolean> => {
  if (roles) {
    if (context.user) {
      if (isEqual(roles, [ACCESS_ROLE.USER])) {
        return true;
      }
      const { result } = await Container.get(AccessService).get({
        filter: { _uid: context.user._id },
      });
      return result ? roles.includes(result.role) : false;
    }
    return roles.includes(ACCESS_ROLE.ANY);
  }
  return false;
};
