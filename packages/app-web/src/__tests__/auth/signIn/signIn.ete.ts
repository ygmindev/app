import { sleepForTransition } from '#lib-frontend/animation/utils/sleepForTransition/sleepForTransition';
import { SIGN_IN } from '#lib-frontend/auth/auth.constants';
import { OTP_FORM_TEST_ID } from '#lib-frontend/auth/containers/OtpForm/OtpForm.constants';
import { USERNAME_FORM_TEST_ID } from '#lib-frontend/auth/containers/UsernameForm/UsernameForm.constants';
import { APP_URI } from '#lib-frontend/http/http.constants';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { screen } from '#lib-frontend/test/utils/screen/screen';
import { type ScreenModel } from '#lib-frontend/test/utils/screen/screen.models';

describe('sign in', () => {
  let screenF: ScreenModel;

  beforeAll(async () => {
    screenF = await screen();
  });

  test('works', async () => {
    await screenF.goto(`${APP_URI}${trimPathname(SIGN_IN)}`);
    await screenF.type('email', 'admin@admin.com');
    await screenF.snapshot();

    await screenF.press(`${USERNAME_FORM_TEST_ID}-submit`);
    await sleepForTransition();

    await screenF.type('otp', process.env.SERVER_OTP_STATIC ?? '123456');
    await screenF.snapshot();

    await screenF.press(`${OTP_FORM_TEST_ID}-submit`);
    await screenF.press('otp-submit');
    await sleepForTransition();
    await screenF.snapshot();
  });
});
