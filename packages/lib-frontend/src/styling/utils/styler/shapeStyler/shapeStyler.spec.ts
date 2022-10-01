import { shapeStyler } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => shapeStyler });

describe(displayName, () => {
  test('works', async () => {
    const result = shapeStyler({}, {});
    expect(result).toStrictEqual({});
  });
});
