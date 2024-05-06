import { validateRange } from '@lib/frontend/data/utils/validateRange/validateRange';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ validateRange });

describe(displayName, () => {
  const MIN = 10;
  const MAX = 20;
  const VALUE_VALID = '15';
  const VALUE_INVALID = '5';

  test('works with valid', async () => {
    const result = validateRange(MIN, MAX)({ value: VALUE_VALID });
    expect(result).toBeFalsy();
  });

  test('works with invalid', async () => {
    const result = validateRange(MIN, MAX)({ value: VALUE_INVALID });
    expect(result).toBeTruthy();
  });
});
