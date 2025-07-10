import { type SignInTokenModel } from '@lib/model/auth/SignIn/SignIn.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type _JwtImplementationModel = {
  createToken(claims: PartialModel<UserModel>): Promise<string>;
  verifyToken(token: string): Promise<SignInTokenModel | null>;
};
