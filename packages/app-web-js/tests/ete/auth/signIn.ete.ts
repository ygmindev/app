import { signIn } from '@app/web/utils/signIn/signIn';
import { TestScreen } from '@lib/backend/test/utils/TestScreen/TestScreen';
import { APP_URI } from '@lib/shared/http/http.constants';

const TEST_NAME = 'signIn';

describe(TEST_NAME, () => {
  const screen = new TestScreen({ dirname: TEST_NAME, rootUri: APP_URI });

  beforeAll(async () => {
    await screen.open(APP_URI);
  });

  test('works', async () => {
    await signIn({ screen });
  });

  afterAll(async () => {
    await screen.close();
  });
});
