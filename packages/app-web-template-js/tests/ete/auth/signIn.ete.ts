import { signIn } from '@app/web/utils/signIn/signIn';
import { TestScreen } from '@lib/backend/test/utils/TestScreen/TestScreen';
import { APP_URI } from '@lib/shared/http/http.constants';

describe('sign in', () => {
  test('works', async () => {
    const screen = new TestScreen({ rootUri: APP_URI });
    await signIn({ isSnapshot: true, screen });
    expect(true).toBe(true);
  });
});
