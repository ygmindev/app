import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { validatePhone } from '@lib/frontend/form/utils/validatePhone/validatePhone';

const { displayName } = withTest({ target: () => validatePhone });

describe(displayName, () => {
  test('works', async () => {
    const result = await validatePhone({});
    expect(result).toStrictEqual({});
  });
});
