import { signIn } from '@app/web/ete/auth/utils/signIn/signIn';
import { withTestScreen } from '@lib/backend/test/utils/withTestScreen/withTestScreen';
import { PERSONAL } from '@lib/frontend/user/user.constants';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { USER_FIXTURE } from '@lib/shared/user/resources/User/User.fixtures';
import { ACCOUNT } from '@lib/shared/user/user.constants';

describe('sign in', () => {
  test('works', async () => {
    await withTestScreen(async (screen) => {
      console.warn('HELLO');
      await signIn({ isSnapshot: true, screen });
      await screen.open(`${ACCOUNT}/${PERSONAL}`);
      await screen.find({ type: SELECTOR_TYPE.TEXT, value: USER_FIXTURE.email ?? '' });
    });
  });
});
