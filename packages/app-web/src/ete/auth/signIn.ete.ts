import { signIn } from '@app/web/ete/auth/utils/signIn/signIn';
import { TestScreen } from '@lib/backend/test/utils/TestScreen/TestScreen';
import { APP_URI } from '@lib/shared/http/http.constants';

describe('sign in', () => {
  test('works', async () => {
    const screen = new TestScreen({ rootUri: APP_URI });
    await signIn({ isSnapshot: true, screen });
    // await screen.open(`${ACCOUNT}/${PERSONAL}`);
    // await screen.find({ type: SELECTOR_TYPE.TEXT, value: USER_FIXTURE.email ?? '' });
  });
});
