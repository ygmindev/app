import { useInterestRateFutureResource } from '@lib/frontend/quant/hooks/useInterestRateFutureResource/useInterestRateFutureResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useInterestRateFutureResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useInterestRateFutureResource());

    unmount();
  });
});
