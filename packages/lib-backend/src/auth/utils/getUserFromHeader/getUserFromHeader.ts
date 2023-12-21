import {
  type GetUserFromHeaderModel,
  type GetUserFromHeaderParamsModel,
} from '#lib-backend/auth/utils/getUserFromHeader/getUserFromHeader.models';
import { JwtService } from '#lib-backend/auth/utils/JwtService/JwtService';
import { Container } from '#lib-backend/core/utils/Container/Container';

export const getUserFromHeader = async (
  params: GetUserFromHeaderParamsModel,
): Promise<GetUserFromHeaderModel> => {
  if (params) {
    const [, token] = params.split(' ');
    return token && token !== 'null' ? Container.get(JwtService).verifyToken(token) : null;
  }
  return null;
};
