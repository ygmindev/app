import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { withRoot } from '@lib/backend/resource/utils/withRoot/withRoot';

const { displayName } = withTest({ withRoot });

describe(displayName, () => {
  test('works', async () => {
    const result = await withRoot({});
    expect(result).toStrictEqual({});
  });
});
