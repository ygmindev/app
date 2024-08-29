import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { preparePrerender } from '@lib/shared/web/utils/preparePrerender/preparePrerender';

const { displayName } = withTest({ preparePrerender });

describe(displayName, () => {
  test('works', async () => {
    const result = await preparePrerender({});
    expect(result).toStrictEqual({});
  });
});
