import { useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useErrorBoundary });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useErrorBoundary());

    unmount();
  });
});
