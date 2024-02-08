import { usePaymentMethod } from '@lib/frontend/billing/hooks/usePaymentMethod/usePaymentMethod';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ usePaymentMethod });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => usePaymentMethod({}));
  });
});
