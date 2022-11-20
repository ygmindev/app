import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useCardResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useCardResource());

    unmount();
  });
});
