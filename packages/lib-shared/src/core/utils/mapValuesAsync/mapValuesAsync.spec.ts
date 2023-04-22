import { mapValuesAsync } from '@lib/shared/core/utils/mapValuesAsync/mapValuesAsync';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => mapValuesAsync });

describe(displayName, () => {
  test('works', async () => {
    const result = await mapValuesAsync({});
    expect(result).toStrictEqual({});
  });
});
