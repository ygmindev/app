import { colorStyler } from '@lib/frontend/style/utils/styler/colorStyler/colorStyler';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => colorStyler });

describe(displayName, () => {
  test('works', async () => {
    const result = colorStyler({}, {});
    expect(result).toStrictEqual({});
  });
});
