import { timezoneFormat } from '@lib/shared/data/utils/timezoneFormat/timezoneFormat';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ timezoneFormat });

describe(displayName, () => {
  test('works with string', async () => {
    const result = timezoneFormat('america/new_york');
    expect(result).toStrictEqual('America/New York');
  });

  test('works with object', async () => {
    let result = timezoneFormat({ name: 'america/new_york', offset: -5 });
    expect(result).toStrictEqual('America/New York (UTC-5:00)');

    result = timezoneFormat({ name: 'asia/seoul', offset: 9 });
    expect(result).toStrictEqual('Asia/Seoul (UTC+9:00)');
  });
});
