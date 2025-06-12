import { signIn } from '@app/web/utils/signIn/signIn';
import { TestScreen } from '@lib/backend/test/utils/TestScreen/TestScreen';
import { EMAIL, PROFILE } from '@lib/frontend/user/user.constants';
import { KEY_TYPE, SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import { APP_URI } from '@lib/shared/http/http.constants';
import { ACCOUNT } from '@lib/shared/user/user.constants';

describe('usernameUpdate', () => {
  const screen = new TestScreen({ rootUri: APP_URI });

  beforeAll(async () => {
    await screen.open(APP_URI);
  });

  const USERNAME_OLD = 'old@old.com';
  const USERNAME_NEW = 'new@new.com';

  test('works', async () => {
    await screen.open(`/${ACCOUNT}/${PROFILE}/${EMAIL}`);
    await screen.snapshot({ filename: 'profile email page' });
    await signIn({ email: USERNAME_OLD, screen });
    await screen
      .find({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'email' })
      .then((h) => h?.type(USERNAME_NEW));
    await screen.snapshot({ filename: 'enter new email' });
    await screen.key(KEY_TYPE.ENTER);

    await screen
      .find({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'otp' })
      .then((h) => h?.type(process.env.SERVER_OTP_STATIC ?? ''));

    await screen.open(`${ACCOUNT}/${PROFILE}`);
    await screen.find({ type: SELECTOR_TYPE.TEXT, value: USERNAME_NEW });
    await screen.snapshot({ filename: 'profile page' });
  });

  afterAll(async () => {
    await screen.close();
  });
});
