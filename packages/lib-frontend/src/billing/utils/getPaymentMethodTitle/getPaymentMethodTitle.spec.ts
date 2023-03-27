import { getPaymentMethodTitle } from '@lib/frontend/billing/utils/getPaymentMethodTitle/getPaymentMethodTitle';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => getPaymentMethodTitle });

describe(displayName, () => {
  test('works', async () => {
    const result = await getPaymentMethodTitle({});
    expect(result).toStrictEqual({});
  });
});
