import { validateLength } from '@lib/frontend/data/utils/validateLength/validateLength';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ validateLength });

describe(displayName, () => {
  const LENGTH = 10;
  const VALUE_VALID = '1234567890';
  const VALUE_INVALID = '123456789';

  test('valid', async () => {
    const result = validateLength(LENGTH)({ value: VALUE_VALID });
    expect(result).toBeFalsy();
  });

  test('invalid', async () => {
    const result = validateLength(LENGTH)({ value: VALUE_INVALID });
    expect(result).toBeTruthy();
  });
});
