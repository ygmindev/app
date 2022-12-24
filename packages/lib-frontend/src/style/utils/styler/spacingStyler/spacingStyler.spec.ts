import { spacingStyler } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => spacingStyler });

describe(displayName, () => {
  test('works', async () => {
    const result = spacingStyler({}, {});
    expect(result).toStrictEqual({});
  });
});
