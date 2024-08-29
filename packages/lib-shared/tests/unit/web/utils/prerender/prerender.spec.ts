import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { prerender } from '@lib/shared/web/utils/prerender/prerender';

const { displayName } = withTest({ prerender });

describe(displayName, () => {
  test('works', async () => {
    const result = await prerender({});
    expect(result).toStrictEqual({});
  });
});
