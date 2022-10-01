import { fontStyler } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => fontStyler });

describe(displayName, () => {
  test('works', async () => {
    const result = fontStyler({}, {});
    expect(result).toStrictEqual({});
  });
});
