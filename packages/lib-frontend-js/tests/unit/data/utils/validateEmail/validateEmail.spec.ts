import { validateEmail } from '@lib/frontend/data/utils/validateEmail/validateEmail';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ validateEmail });

describe(displayName, () => {
  const VALUE_VALID = 'VALUE_VALID';
  const VALUE_INVALID = '';

  test('valid', async () => {
    const result = validateEmail({ value: VALUE_VALID });
    expect(result).toBeFalsy();
  });

  test('invalid', async () => {
    const result = validateEmail({ value: VALUE_INVALID });
    expect(result).toBeTruthy();
  });
});
