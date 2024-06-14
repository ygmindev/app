import { AccessImplementation } from '@lib/backend/auth/resources/Access/AccessImplementation/AccessImplementation';
import {
  type AuthorizeModel,
  type AuthorizeParamsModel,
} from '@lib/backend/auth/utils/authorize/authorize.models';
import { Container } from '@lib/backend/core/utils/Container/Container';
import { ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';

export const authorize = async ({
  context,
  roles,
}: AuthorizeParamsModel): Promise<AuthorizeModel> => {
  if (roles?.length) {
    if (context.user) {
      if (roles.includes(ACCESS_ROLE.USER)) {
        return true;
      }
      const { result } = await Container.get(AccessImplementation).get({
        filter: [{ field: '_user', value: context.user._id }],
      });
      return result?.role ? roles.every(result.role?.includes) : false;
      // TODO: limit admin
      // return true;
    }
    return false;
  }
  return true;
};
