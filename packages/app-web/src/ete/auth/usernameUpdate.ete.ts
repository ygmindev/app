import { signIn } from '@app/web/ete/auth/utils/signIn/signIn';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { seed } from '@lib/backend/test/utils/seed/seed';
import { withTestScreen } from '@lib/backend/test/utils/withTestScreen/withTestScreen';
import { SELECTOR_TYPE } from '@lib/config/crawling/screen/screen.constants';
import { USERNAME_FORM_TEST_ID } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.constants';
import { EMAIL, PERSONAL } from '@lib/frontend/user/user.constants';
import { ACCOUNT } from '@lib/shared/user/user.constants';

describe('usernameUpdate', () => {
  beforeAll(async () => {
    await initialize();
  });

  beforeEach(async () => {
    await seed();
  });

  const USERNAME_NEW = 'new@new.com';

  test('works', async () => {
    await withTestScreen(async (screen) => {
      await screen.goto(`/${ACCOUNT}/${PERSONAL}/${EMAIL}`);
      await screen.snapshot();
      await signIn({ screen });
      await screen.snapshot();
      await screen.type({
        target: { key: 'test-id', type: SELECTOR_TYPE.DATA, value: 'email' },
        value: USERNAME_NEW,
      });
      await screen.snapshot();
      await screen.press({
        target: {
          key: 'test-id',
          type: SELECTOR_TYPE.DATA,
          value: `${USERNAME_FORM_TEST_ID}-submit`,
        },
      });
      await screen.type({
        target: { key: 'test-id', type: SELECTOR_TYPE.DATA, value: 'otp' },
        value: process.env.SERVER_OTP_STATIC ?? '',
      });
      await screen.goto(`${ACCOUNT}/${PERSONAL}`);
      await screen.waitForText(USERNAME_NEW);
      await screen.snapshot();
    });
  });
});
