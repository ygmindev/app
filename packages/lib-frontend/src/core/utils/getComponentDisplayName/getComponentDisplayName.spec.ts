import { getComponentDisplayName } from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getComponentDisplayName });

describe(displayName, () => {
  test('works', async () => {
    const result = await getComponentDisplayName({});
    expect(result).toStrictEqual({});
  });
});
