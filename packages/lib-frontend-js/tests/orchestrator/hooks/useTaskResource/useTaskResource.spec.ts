import { useTaskResource } from '@lib/frontend/orchestrator/hooks/useTaskResource/useTaskResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useTaskResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useTaskResource());

    unmount();
  });
});
