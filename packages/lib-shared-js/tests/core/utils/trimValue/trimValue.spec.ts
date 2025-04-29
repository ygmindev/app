import { trimValue } from '@lib/shared/core/utils/trimValue/trimValue';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ trimValue });

describe(displayName, () => {
  test('works', async () => {
    const result = await trimValue({});
    expect(result).toStrictEqual({});
  });
});
