import { useTreasuryRateResource } from '@lib/frontend/quant/hooks/useTreasuryRateResource/useTreasuryRateResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useTreasuryRateResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useTreasuryRateResource());

    unmount();
  });
});
