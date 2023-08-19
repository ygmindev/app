import { useUnderwriterResource } from '#lib-frontend/capital/hooks/useUnderwriterResource/useUnderwriterResource';
import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useUnderwriterResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useUnderwriterResource());

    unmount();
  });
});
