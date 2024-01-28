import {
  type GetUserFromHeaderModel,
  type GetUserFromHeaderParamsModel,
} from '@lib/backend/auth/utils/getUserFromHeader/getUserFromHeader.models';
import { JwtImplementation } from '@lib/backend/auth/utils/JwtImplementation/JwtImplementation';
import { Container } from '@lib/backend/core/utils/Container/Container';

export const getUserFromHeader = async (
  params: GetUserFromHeaderParamsModel,
): Promise<GetUserFromHeaderModel> => {
  if (params) {
    const [, token] = params.split(' ');
    return token && token !== 'null' ? Container.get(JwtImplementation).verifyToken(token) : null;
  }
  return null;
};
