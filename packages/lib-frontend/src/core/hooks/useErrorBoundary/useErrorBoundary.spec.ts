import { useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useErrorBoundary });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useErrorBoundary({}));
  });
});
