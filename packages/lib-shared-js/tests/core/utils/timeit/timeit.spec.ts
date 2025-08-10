import { timeit } from '@lib/shared/core/utils/timeit/timeit';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ timeit });

describe(displayName, () => {
  test('works', async () => {
    const result = await timeit({});
    expect(result).toStrictEqual({});
  });
});
