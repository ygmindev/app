import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type _JwtImplementationModel = {
  createToken(id: string, claims: EntityResourceDataModel<UserModel>): Promise<string>;
  verifyToken(token: string): Promise<SignInTokenModel | null>;
};
