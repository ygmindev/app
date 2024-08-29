import { validatePhone } from '@lib/frontend/data/utils/validatePhone/validatePhone';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ validatePhone });

describe(displayName, () => {
  test('works', async () => {
    const result = validatePhone({});
    expect(result).toStrictEqual({});
  });
});
