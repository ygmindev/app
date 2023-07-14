import { SIGN_IN } from '#lib-frontend/auth/auth.constants';
import { USERNAME_FORM_TEST_ID } from '#lib-frontend/auth/containers/UsernameForm/UsernameForm.constants';
import { APP_URI } from '#lib-frontend/http/http.constants';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { screen } from '#lib-frontend/test/utils/screen/screen';
import { type ScreenModel } from '#lib-frontend/test/utils/screen/screen.models';
import { OTP_STATIC } from '#lib-shared/auth/resources/Otp/Otp.constants';

describe('sign in', () => {
  let screenF: ScreenModel;

  beforeAll(async () => {
    screenF = await screen();
  });

  test('works', async () => {
    await screenF.goto(`${APP_URI}${trimPathname(SIGN_IN)}`);
    await screenF.type('email', 'admin@admin.com');
    await screenF.snapshot({ name: 'email' });

    await screenF.press(`${USERNAME_FORM_TEST_ID}-submit`);
    // await sleep(THEME_CONFIG.animation.transition);

    await screenF.type('otp', OTP_STATIC);
    await screenF.snapshot({ name: 'otp' });

    expect(1).toStrictEqual(1);
  });
});
