import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { useSocketResource } from '@lib/frontend/http/hooks/useSocketResource/useSocketResource';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useSocketResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useSocketResource());

    unmount();
  });
});
