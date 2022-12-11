import { viewStyler } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => viewStyler });

describe(displayName, () => {
  test('works', async () => {
    const result = viewStyler({}, {});
    expect(result).toStrictEqual({});
  });
});
