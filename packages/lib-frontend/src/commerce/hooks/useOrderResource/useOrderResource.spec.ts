import { useOrderResource } from '@lib/frontend/commerce/hooks/useOrderResource/useOrderResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useOrderResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useOrderResource());

    unmount();
  });
});
