import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ numberFormat });

describe(displayName, () => {
  const VALUE = 1234.5678;

  test('works', async () => {
    const result = numberFormat(VALUE, { currency: 'usd', isSeparated: true, precision: 2 });
    expect(result).toStrictEqual('$1,234.57');
  });
});
