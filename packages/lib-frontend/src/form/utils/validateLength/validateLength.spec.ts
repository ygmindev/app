import { validateLength } from '@lib/frontend/form/utils/validateLength/validateLength';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => validateLength });

describe(displayName, () => {
  const VALUE_VALID = 'VALUE_VALID';
  const VALUE_INVALID = '';

  test('works with valid', async () => {
    const result = validateLength()({ value: VALUE_VALID });
    expect(result).toBeFalsy();
  });

  test('works with invalid', async () => {
    const result = validateLength()({ value: VALUE_INVALID });
    expect(result).toBeTruthy();
  });
});
