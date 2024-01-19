import { palette } from '@lib/frontend/style/utils/palette/palette';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ palette });

describe(displayName, () => {
  const COLOR = '#000000';
  test('works', async () => {
    const result = palette({ color: COLOR });
    expect(result).toStrictEqual(COLOR);
  });
});
