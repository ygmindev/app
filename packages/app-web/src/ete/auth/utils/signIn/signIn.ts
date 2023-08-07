import {
  type SignInModel,
  type SignInParamsModel,
} from '#app-web/ete/auth/utils/signIn/signIn.models';
import { SIGN_IN } from '#lib-frontend/auth/auth.constants';
import { USERNAME_FORM_TEST_ID } from '#lib-frontend/auth/containers/UsernameForm/UsernameForm.constants';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { USER_FIXTURE } from '#lib-shared/user/resources/User/User.fixtures';

export const signIn = async ({ isSnapshot, screen }: SignInParamsModel): Promise<SignInModel> => {
  screen.uri().pathname !== trimPathname(SIGN_IN) && (await screen.goto(SIGN_IN));
  await screen.type('email', USER_FIXTURE.email);
  isSnapshot && (await screen.snapshot());
  await screen.press(`${USERNAME_FORM_TEST_ID}-submit`);
  await screen.type('otp', process.env.SERVER_OTP_STATIC ?? '');
  isSnapshot && (await screen.snapshot());
};
