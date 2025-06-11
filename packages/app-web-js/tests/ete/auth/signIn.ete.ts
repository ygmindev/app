import { signIn } from '@app/web/utils/signIn/signIn';
import { TestScreen } from '@lib/backend/test/utils/TestScreen/TestScreen';
import { APP_URI } from '@lib/shared/http/http.constants';

describe('sign in', () => {
  const screen = new TestScreen({ rootUri: APP_URI });

  beforeAll(async () => {
    await screen.open(APP_URI);
  });

  test('works', async () => {
    await signIn({ isSnapshot: true, screen });
  });
});
