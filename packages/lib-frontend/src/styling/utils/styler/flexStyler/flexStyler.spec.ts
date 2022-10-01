import { flexStyler } from '@lib/frontend/styling/utils/styler/flexStyler/flexStyler';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => flexStyler });

describe(displayName, () => {
  test('works', async () => {
    const result = flexStyler({}, {});
    expect(result).toStrictEqual({});
  });
});
