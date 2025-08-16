import { useInterestRateFutureQuoteResource } from '@lib/frontend/quant/hooks/useInterestRateFutureQuoteResource/useInterestRateFutureQuoteResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useInterestRateFutureQuoteResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useInterestRateFutureQuoteResource());

    unmount();
  });
});
