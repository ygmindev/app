import { prerender } from '@lib/platform/web/exports/prerender/prerender';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ prerender });

describe(displayName, () => {
  test('works', async () => {
    const result = await prerender({});
    expect(result).toStrictEqual({});
  });
});
