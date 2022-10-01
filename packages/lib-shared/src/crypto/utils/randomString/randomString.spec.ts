import { randomString } from '@lib/shared/crypto/utils/randomString/randomString';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => randomString });

describe(displayName, () => {
  const RANDOM_LENGTH = 7;

  test('works', async () => {
    const result = randomString(RANDOM_LENGTH);
    expect(result.length).toStrictEqual(RANDOM_LENGTH);
  });
});
