import { useInterestRateResource } from '@lib/frontend/quant/hooks/useInterestRateResource/useInterestRateResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useInterestRateResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useInterestRateResource());

    unmount();
  });
});
