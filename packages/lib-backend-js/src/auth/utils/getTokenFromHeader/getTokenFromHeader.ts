import {
  type GetTokenFromHeaderModel,
  type GetTokenFromHeaderParamsModel,
} from '@lib/backend/auth/utils/getTokenFromHeader/getTokenFromHeader.models';
import { JwtImplementation } from '@lib/backend/auth/utils/JwtImplementation/JwtImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const getTokenFromHeader = async (
  params?: GetTokenFromHeaderParamsModel,
): Promise<GetTokenFromHeaderModel> => {
  if (params) {
    const [, token] = params.split(' ');
    return token && token !== 'null' ? Container.get(JwtImplementation).verifyToken(token) : null;
  }
  return null;
};
