import { withTestScreen } from '@lib/backend/test/utils/withTestScreen/withTestScreen';

const TEST_NAME = 'signIn';

describe(TEST_NAME, () => {
  const { screen } = withTestScreen({ testName: TEST_NAME });

  test('new payment card', async () => {
    expect(true).toBeTruthy();
  });
});
