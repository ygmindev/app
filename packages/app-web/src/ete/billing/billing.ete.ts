import { TestScreen } from '@lib/backend/test/utils/TestScreen/TestScreen';
import { APP_URI } from '@lib/shared/http/http.constants';

describe('billing', () => {
  test('works', async () => {
    const screen = new TestScreen({ rootUri: APP_URI });
  });
});
