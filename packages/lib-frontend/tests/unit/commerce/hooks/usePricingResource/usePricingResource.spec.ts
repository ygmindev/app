import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { usePricingResource } from '@lib/frontend/commerce/hooks/usePricingResource/usePricingResource';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ usePricingResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => usePricingResource());

    unmount();
  });
});
