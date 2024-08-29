import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { dateTimeDifference } from '@lib/shared/data/utils/dateTimeDifference/dateTimeDifference';

const { displayName } = withTest({ dateTimeDifference });

describe(displayName, () => {
  test('works', async () => {
    const result = await dateTimeDifference({});
    expect(result).toStrictEqual({});
  });
});
