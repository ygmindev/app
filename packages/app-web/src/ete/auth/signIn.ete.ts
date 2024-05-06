import { signIn } from '@app/web/ete/auth/utils/signIn/signIn';
import { withTestScreen } from '@lib/backend/test/utils/withTestScreen/withTestScreen';
import { APP_URI } from '@lib/shared/http/http.constants';

describe('sign in', () => {
  test('works', async () => {
    await withTestScreen(
      async (screen) => {
        await signIn({ isSnapshot: true, screen });
        // await screen.open(`${ACCOUNT}/${PERSONAL}`);
        // await screen.find({ type: SELECTOR_TYPE.TEXT, value: USER_FIXTURE.email ?? '' });
      },
      { rootUri: APP_URI },
    );
  });
});
