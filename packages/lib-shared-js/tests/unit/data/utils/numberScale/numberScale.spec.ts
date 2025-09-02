import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';
import { AMOUNT_UNIT } from '@lib/shared/data/utils/numberFormat/numberFormat.constants';
import { numberScale } from '@lib/shared/data/utils/numberScale/numberScale';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ numberFormat });

describe(displayName, () => {
  const VALUE = 1e6;

  test('no formatting', async () => {
    const result = numberScale(VALUE);
    expect(result).toStrictEqual(VALUE);
  });

  test('multiplier', async () => {
    const result = numberScale(VALUE, { multiplier: 1e3 });
    expect(result).toStrictEqual(VALUE * 1e3);
  });

  test('amount unit', async () => {
    const result = numberScale(VALUE, { unit: AMOUNT_UNIT.MILLION });
    expect(result).toStrictEqual(VALUE / 1e6);
  });
});
