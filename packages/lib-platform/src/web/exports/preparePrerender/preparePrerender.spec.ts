import { preparePrerender } from '@lib/platform/web/exports/preparePrerender/preparePrerender';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ preparePrerender });

describe(displayName, () => {
  test('works', async () => {
    const result = await preparePrerender({});
    expect(result).toStrictEqual({});
  });
});
