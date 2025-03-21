import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type _JwtImplementationModel = {
  createToken(id: string, claims: PartialModel<UserModel>): Promise<string>;
  verifyToken(token: string): Promise<SignInTokenModel | null>;
};
