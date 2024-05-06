import {
  type AuthorizeModel,
  type AuthorizeParamsModel,
} from '@lib/backend/auth/utils/authorize/authorize.models';
import { ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';

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
      // const { result } = await Container.get(AccessImplementation).get({
      //   filter: [{ field: '_user', value: context.user._id }],
      // });
      // return result ? roles.includes(result.role) : false;
      // TODO: limit admin
      return true;
    }
    return false;
  }
  return false;
};
