import { getEntityResourceFixture } from '@lib/backend/test/utils/getEntityResourceFixture/getEntityResourceFixture';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getEntityResourceFixture });

describe(displayName, () => {
  test('works', async () => {
    const result = await getEntityResourceFixture({});
    expect(result).toStrictEqual({});
  });
});
