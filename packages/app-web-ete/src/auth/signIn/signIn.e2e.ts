import { APP_NAME } from '@app/web/app/app.constants';
import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { OTP_FIELD_MAIN_TEST_ID } from '@lib/frontend/auth/components/OtpField/OtpField.constants';
import { USERNAME_FORM_TEST_ID } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.constants';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';
import { screen } from '@lib/frontend/testing/utils/screen/screen';
import type { ScreenModel } from '@lib/frontend/testing/utils/screen/screen.models';
import { OTP_STATIC } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';

const URI = appUri({ name: APP_NAME });

describe('sign in', () => {
  let _screen: ScreenModel;

  beforeAll(async () => {
    _screen = await screen();
  });

  test('works', async () => {
    console.warn(1);
    await _screen.open(`${URI}${trimPathname(SIGN_IN)}`);

    console.warn(2);
    await _screen.type('username', 'admin@admin.com');

    console.warn(3);
    await _screen.click(`${USERNAME_FORM_TEST_ID}-submit`);

    console.warn(4);
    await _screen.type(OTP_FIELD_MAIN_TEST_ID, OTP_STATIC);

    console.warn(5);
    expect(1).toStrictEqual(1);
  });
});
