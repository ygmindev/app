import { AccessService } from '#lib-backend/auth/resources/Access/AccessService/AccessService';
import {
  type AuthorizeModel,
  type AuthorizeParamsModel,
} from '#lib-backend/auth/utils/authorize/authorize.models';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { ACCESS_ROLE } from '#lib-shared/auth/resources/Access/Access.constants';

export const authorize = async ({
  context,
  roles,
}: AuthorizeParamsModel): Promise<AuthorizeModel> => {
  if (roles) {
    if (roles.includes(ACCESS_ROLE.ANY)) {
      return true;
    }
    if (context.user) {
      if (roles.includes(ACCESS_ROLE.USER)) {
        return true;
      }
      const { result } = await Container.get(AccessService).get({
        filter: { _uid: context.user._id },
      });
      return result ? roles.includes(result.role) : false;
    }
    return false;
  }
  return false;
};
