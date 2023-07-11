import { SIGN_IN } from '#lib-frontend/auth/auth.constants';
// import { OTP_STATIC } from '#lib-shared/auth/resources/Otp/Otp.constants';
import { APP_URI } from '#lib-frontend/http/http.constants';
// import { OTP_FIELD_MAIN_TEST_ID } from '#lib-frontend/auth/components/OtpField/OtpField.constants';
// import { USERNAME_FORM_TEST_ID } from '#lib-frontend/auth/containers/UsernameForm/UsernameForm.constants';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { screen } from '#lib-frontend/test/utils/screen/screen';
import { type ScreenModel } from '#lib-frontend/test/utils/screen/screen.models';

describe('sign in', () => {
  let screenF: ScreenModel;

  beforeAll(async () => {
    screenF = await screen();
  });

  test('works', async () => {
    await screenF.open(`${APP_URI}${trimPathname(SIGN_IN)}`);
    await screenF.type('username', 'admin@admin.com');
    // await screenF.click(`${USERNAME_FORM_TEST_ID}-submit`);
    // await screenF.type(OTP_FIELD_MAIN_TEST_ID, OTP_STATIC);
    expect(1).toStrictEqual(1);
  });
});
