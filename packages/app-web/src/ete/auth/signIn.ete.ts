import { signIn } from '@app/web/ete/auth/utils/signIn/signIn';
import { withScreen } from '@lib/frontend/test/utils/withScreen/withScreen';
import { PERSONAL } from '@lib/frontend/user/user.constants';
import { USER_FIXTURE } from '@lib/shared/user/resources/User/User.fixtures';
import { ACCOUNT } from '@lib/shared/user/user.constants';

describe('sign in', () => {
  test('works', async () => {
    await withScreen(async (screen) => {
      await signIn({ isSnapshot: true, screen });
      await screen.goto(`${ACCOUNT}/${PERSONAL}`);
      await screen.waitForText(USER_FIXTURE.email);
    });
  });
});
