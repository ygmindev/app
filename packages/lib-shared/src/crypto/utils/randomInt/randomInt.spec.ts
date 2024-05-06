import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ randomInt });

describe(displayName, () => {
  const RANDOM_LENGTH = 7;

  test('works', async () => {
    const [LOWER_BOUND, UPPER_BOUND] = [10 ** (RANDOM_LENGTH - 1), 10 ** RANDOM_LENGTH - 1];
    const result = randomInt(RANDOM_LENGTH);
    expect(result).toBeGreaterThanOrEqual(LOWER_BOUND);
    expect(result).toBeLessThanOrEqual(UPPER_BOUND);
  });
});
