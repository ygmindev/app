import { timezoneFormat } from '@lib/shared/format/utils/timezoneFormat/timezoneFormat';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => timezoneFormat });

describe(displayName, () => {
  test('works', async () => {
    const result = await timezoneFormat({});
    expect(result).toStrictEqual({});
  });
});
