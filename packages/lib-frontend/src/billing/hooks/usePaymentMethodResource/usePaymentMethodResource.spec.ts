import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ usePaymentMethodResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => usePaymentMethodResource());

    unmount();
  });
});
