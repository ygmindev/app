import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useCardResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useCardResource());

    unmount();
  });
});
