import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { USER_FIXTURE } from '@lib/shared/user/resources/User/User.fixtures';

export const SIGN_IN_TOKEN_FIXTURE: SignInTokenModel = {
  _id: USER_FIXTURE._id,
  claims: USER_FIXTURE,
};
