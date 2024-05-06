import { validateAlphaNumeric } from '@lib/frontend/data/utils/validateAlphaNumeric/validateAlphaNumeric';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ validateAlphaNumeric });

describe(displayName, () => {
  const VALUE_VALID = 'VALUE_VALID';
  const VALUE_INVALID = '';

  test('works with valid', async () => {
    const result = validateAlphaNumeric()({ value: VALUE_VALID });
    expect(result).toBeFalsy();
  });

  test('works with invalid', async () => {
    const result = validateAlphaNumeric()({ value: VALUE_INVALID });
    expect(result).toBeTruthy();
  });
});
