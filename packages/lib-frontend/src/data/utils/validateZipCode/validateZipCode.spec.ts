import { validateZipCode } from '@lib/frontend/data/utils/validateZipCode/validateZipCode';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ validateZipCode });

describe(displayName, () => {
  const VALUE_VALID = 'VALUE_VALID';
  const VALUE_INVALID = '';

  test('works with valid', async () => {
    const result = validateZipCode()({ value: VALUE_VALID });
    expect(result).toBeFalsy();
  });

  test('works with invalid', async () => {
    const result = validateZipCode()({ value: VALUE_INVALID });
    expect(result).toBeTruthy();
  });
});
