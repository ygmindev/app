import { dateTimeAdd } from '@lib/shared/datetime/utils/dateTimeAdd/dateTimeAdd';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ dateTimeAdd });

describe(displayName, () => {
  test('works', async () => {
    const result = await dateTimeAdd({});
    expect(result).toStrictEqual({});
  });
});
