import { shapeStyler } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => shapeStyler });

describe(displayName, () => {
  test('works', async () => {
    const result = shapeStyler({}, {});
    expect(result).toStrictEqual({});
  });
});
