import { type SignInModel, type SignInParamsModel } from '@app/web/utils/signIn/signIn.models';
import { USER_FIXTURE } from '@lib/model/user/User/User.fixtures';
import { SIGN_IN } from '@lib/shared/auth/auth.constants';
import { KEY_TYPE, SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';

export const signIn = async ({
  dirname = SIGN_IN,
  email = USER_FIXTURE.email,
  isSnapshot = true,
  screen,
}: SignInParamsModel): Promise<SignInModel> => {
  await screen.open(SIGN_IN);
  console.warn(email);
  await screen
    .find({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'email' })
    .then((h) => h?.type(email ?? ''));
  isSnapshot && (await screen.snapshot({ dirname, filename: 'enter email' }));
  await screen.key(KEY_TYPE.ENTER);
  await screen
    .find({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'otp' })
    .then((h) => h?.type(process.env.SERVER_OTP_STATIC ?? ''));
  isSnapshot && (await screen.snapshot({ dirname, filename: 'enter otp' }));
  expect(true).toBe(true);
};
