import { colorStyler } from '@lib/frontend/styling/utils/styler/colorStyler/colorStyler';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => colorStyler });

describe(displayName, () => {
  test('works', async () => {
    const result = colorStyler({}, {});
    expect(result).toStrictEqual({});
  });
});
