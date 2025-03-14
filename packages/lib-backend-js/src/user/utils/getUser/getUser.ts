import { UserImplementation } from '@lib/backend/user/resources/User/UserImplementation/UserImplementation';
import {
  type GetUserModel,
  type GetUserParamsModel,
} from '@lib/backend/user/utils/getUser/getUser.models';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const getUser = async (params?: GetUserParamsModel): Promise<GetUserModel> => {
  if (params) {
    return {
      _id: params,
      ...((
        await Container.get(UserImplementation).get({ filter: [{ field: '_id', value: params }] })
      ).result ?? null),
    };
  }
  throw new UnauthenticatedError();
};
