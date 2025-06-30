import { type SignInTokenModel } from '@lib/model/auth/SignIn/SignIn.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type _JwtImplementationModel = {
  createToken(id: string, claims: PartialModel<UserModel>): Promise<string>;
  verifyToken(token: string): Promise<SignInTokenModel | null>;
};
