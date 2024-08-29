import { withDivider } from '@lib/frontend/core/utils/withDivider/withDivider';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withDivider });

describe(displayName, () => {
  test('works', async () => {
    const result = await withDivider({});
    expect(result).toStrictEqual({});
  });
});
