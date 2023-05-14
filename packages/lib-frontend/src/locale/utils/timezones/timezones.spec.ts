import { timezones } from '@lib/frontend/locale/utils/timezones/timezones';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ timezones });

describe(displayName, () => {
  test('works', async () => {
    const result = await timezones({});
    expect(result).toStrictEqual({});
  });
});
