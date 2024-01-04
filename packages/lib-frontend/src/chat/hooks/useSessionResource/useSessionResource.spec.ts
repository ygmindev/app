import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { useSessionResource } from '#lib-frontend/chat/hooks/useSessionResource/useSessionResource';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useSessionResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useSessionResource());

    unmount();
  });
});
