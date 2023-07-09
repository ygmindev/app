import { withTest } from '#lib-shared/test/utils/withTest/withTest';
import { cleanUp } from '#lib-shared/core/utils/cleanUp/cleanUp';

const { displayName } = withTest({ cleanUp });

describe(displayName, () => {
  test('works', async () => {
    const result = await cleanUp({});
    expect(result).toStrictEqual({});
  });
});
