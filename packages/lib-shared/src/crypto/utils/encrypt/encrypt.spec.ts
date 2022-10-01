import { encrypt } from '@lib/shared/crypto/utils/encrypt/encrypt';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => encrypt });

describe(displayName, () => {
  test('works', async () => {
    const TEST_STRING = 'TEST_STRING';
    const result = encrypt(TEST_STRING);
    expect(result).not.toStrictEqual(TEST_STRING);
  });
});
