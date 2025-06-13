import { signIn } from '@app/web/utils/signIn/signIn';
import { withTestScreen } from '@lib/backend/test/utils/withTestScreen/withTestScreen';
import { EMAIL, PROFILE } from '@lib/frontend/user/user.constants';
import { KEY_TYPE, SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import { ACCOUNT } from '@lib/shared/user/user.constants';

const TEST_NAME = 'usernameUpdate';

describe(TEST_NAME, () => {
  const { screen } = withTestScreen({ email: false, testName: TEST_NAME });

  const USERNAME_OLD = 'old@old.com';
  const USERNAME_NEW = 'new@new.com';

  test('works', async () => {
    await screen.open(`/${ACCOUNT}/${PROFILE}/${EMAIL}`);
    await screen.snapshot({ filename: 'profile email page' });
    await signIn({ email: USERNAME_OLD, screen });
    await screen
      .find({ type: SELECTOR_TYPE.TEST_ID, value: 'email' })
      .then((h) => h?.type(USERNAME_NEW));
    await screen.snapshot({ filename: 'enter new email' });
    await screen.key(KEY_TYPE.ENTER);
    await screen
      .find({ type: SELECTOR_TYPE.TEST_ID, value: 'otp' })
      .then((h) => h?.type(process.env.SERVER_OTP_STATIC ?? ''));
    await screen.open(`${ACCOUNT}/${PROFILE}`);
    await screen.find({ type: SELECTOR_TYPE.TEXT, value: USERNAME_NEW });
    await screen.snapshot({ filename: 'profile page' });
  });
});
