import { dateTimeParse } from '@lib/shared/data/utils/dateTimeParse/dateTimeParse';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ dateTimeParse });

describe(displayName, () => {
  test('works', async () => {
    const result = await dateTimeParse({});
    expect(result).toStrictEqual({});
  });
});
