import { type SignInTokenModel } from '@lib/model/auth/SignIn/SignIn.models';
import { USER_FIXTURE } from '@lib/model/user/User/User.fixtures';

export const SIGN_IN_TOKEN_FIXTURE: SignInTokenModel = {
  _id: USER_FIXTURE._id,

  claims: USER_FIXTURE,
};
