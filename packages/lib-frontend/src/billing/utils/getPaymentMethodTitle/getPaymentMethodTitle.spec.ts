import { getPaymentMethodTitle } from '@lib/frontend/billing/utils/getPaymentMethodTitle/getPaymentMethodTitle';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getPaymentMethodTitle });

describe(displayName, () => {
  test('works', async () => {
    const result = getPaymentMethodTitle({});
    expect(result).toStrictEqual({});
  });
});
