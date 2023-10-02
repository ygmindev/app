import { signIn } from '#app-web/ete/auth/utils/signIn/signIn';
import { initialize } from '#lib-backend/setup/utils/initialize/initialize';
import { seed } from '#lib-backend/test/utils/seed/seed';
import { USERNAME_FORM_TEST_ID } from '#lib-frontend/auth/containers/UsernameForm/UsernameForm.constants';
import { withScreen } from '#lib-frontend/test/utils/withScreen/withScreen';
import { EMAIL, PERSONAL } from '#lib-frontend/user/user.constants';
import { ACCOUNT } from '#lib-shared/user/user.constants';

describe('usernameUpdate', () => {
  beforeAll(async () => {
    await initialize();
  });

  beforeEach(async () => {
    await seed();
  });

  const USERNAME_NEW = 'new@new.com';

  test('works', async () => {
    await withScreen(async (screen) => {
      await screen.goto(`/${ACCOUNT}/${PERSONAL}/${EMAIL}`);
      await screen.snapshot();
      await signIn({ screen });
      await screen.snapshot();
      await screen.type('email', USERNAME_NEW);
      await screen.snapshot();
      await screen.press(`${USERNAME_FORM_TEST_ID}-submit`);
      await screen.type('otp', process.env.SERVER_OTP_STATIC ?? '');
      await screen.goto(`${ACCOUNT}/${PERSONAL}`);
      await screen.waitForText(USERNAME_NEW);
      await screen.snapshot();
    });
  });
});
