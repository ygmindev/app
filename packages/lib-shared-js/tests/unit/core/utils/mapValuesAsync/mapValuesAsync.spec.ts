import { mapValuesAsync } from '@lib/shared/core/utils/mapValuesAsync/mapValuesAsync';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ mapValuesAsync });

describe(displayName, () => {
  test('works', async () => {
    const result = await mapValuesAsync({ a: 1, b: 2 }, async (value) =>
      Promise.resolve((value as number) + 1),
    );
    expect(result).toStrictEqual({ a: 2, b: 3 });
  });
});
