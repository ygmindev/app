import { dateTimeFormat } from '@lib/shared/format/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/format/utils/dateTimeFormat/dateTimeFormat.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => dateTimeFormat });

describe(displayName, () => {
  const VALUE = new Date(2000, 0, 15, 5, 10, 30);

  test('works with date', async () => {
    const result = dateTimeFormat({ format: DATE_TIME_FORMAT_TYPE.DATE, value: VALUE });
    expect(result).toStrictEqual('01/15/2000');
  });

  test('works with datetime', async () => {
    const result = dateTimeFormat({
      format: DATE_TIME_FORMAT_TYPE.DATE_TIME_SECONDS,
      value: VALUE,
    });
    expect(result).toStrictEqual('01/15/2000 05:10:30');
  });
});
