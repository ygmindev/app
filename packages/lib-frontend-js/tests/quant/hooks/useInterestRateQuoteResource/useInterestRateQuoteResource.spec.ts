import { useInterestRateQuoteResource } from '@lib/frontend/quant/hooks/useInterestRateQuoteResource/useInterestRateQuoteResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useInterestRateQuoteResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useInterestRateQuoteResource());

    unmount();
  });
});
