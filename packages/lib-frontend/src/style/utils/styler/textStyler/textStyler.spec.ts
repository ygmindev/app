import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => textStyler });

describe(displayName, () => {
  test('works', async () => {
    const result = textStyler({}, {});
    expect(result).toStrictEqual({});
  });
});
