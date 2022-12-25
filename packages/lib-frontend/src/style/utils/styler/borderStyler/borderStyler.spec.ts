import { borderStyler } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => borderStyler });

describe(displayName, () => {
  test('works', async () => {
    const result = borderStyler({}, {});
    expect(result).toStrictEqual({});
  });
});