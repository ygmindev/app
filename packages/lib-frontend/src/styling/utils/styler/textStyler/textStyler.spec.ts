import { textStyler } from '@lib/frontend/styling/utils/styler/textStyler/textStyler';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => textStyler });

describe(displayName, () => {
  test('works', async () => {
    const result = textStyler({}, {});
    expect(result).toStrictEqual({});
  });
});
