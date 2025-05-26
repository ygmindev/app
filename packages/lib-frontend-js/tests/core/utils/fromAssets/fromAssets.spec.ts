import { fromAssets } from '@lib/frontend/core/utils/fromAssets/fromAssets';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ fromAssets });

describe(displayName, () => {
  test('works', async () => {
    const result = await fromAssets({});
    expect(result).toStrictEqual({});
  });
});
