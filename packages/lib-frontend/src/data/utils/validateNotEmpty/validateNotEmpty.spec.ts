import { validateNotEmpty } from '@lib/frontend/data/utils/validateNotEmpty/validateNotEmpty';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ validateNotEmpty });

describe(displayName, () => {
  const VALUE_VALID = 'VALUE_VALID';
  const VALUE_INVALID = '';

  test('works with valid', async () => {
    const result = validateNotEmpty({ value: VALUE_VALID });
    expect(result).toBeFalsy();
  });

  test('works with invalid', async () => {
    const result = validateNotEmpty({ value: VALUE_INVALID });
    expect(result).toBeTruthy();
  });
});
