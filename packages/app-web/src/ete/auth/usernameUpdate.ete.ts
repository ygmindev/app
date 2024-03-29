import { signIn } from '@app/web/ete/auth/utils/signIn/signIn';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { seed } from '@lib/backend/test/utils/seed/seed';
import { withTestScreen } from '@lib/backend/test/utils/withTestScreen/withTestScreen';
import { _config as databaseConfig } from '@lib/config/database/database.mongo';
import { EMAIL, PERSONAL } from '@lib/frontend/user/user.constants';
import {
  KEY_TYPE,
  SELECTOR_TYPE,
} from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { ACCOUNT } from '@lib/shared/user/user.constants';

describe('usernameUpdate', () => {
  beforeAll(async () => {
    await initialize({ databaseConfig: databaseConfig() });
  });

  beforeEach(async () => {
    await seed();
  });

  const USERNAME_NEW = 'new@new.com';

  test('works', async () => {
    await withTestScreen(async (screen) => {
      await screen.open(`/${ACCOUNT}/${PERSONAL}/${EMAIL}`);
      await screen.snapshot();
      await signIn({ screen });
      await screen.snapshot();
      await screen
        .find({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'email' })
        .then((h) => h?.type(USERNAME_NEW));
      await screen.snapshot();
      await screen.key(KEY_TYPE.ENTER);

      await screen
        .find({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'otp' })
        .then((h) => h?.type(process.env.SERVER_OTP_STATIC ?? ''));

      await screen.open(`${ACCOUNT}/${PERSONAL}`);
      await screen.find({ type: SELECTOR_TYPE.TEXT, value: USERNAME_NEW });
      await screen.snapshot();
    });
  });
});
