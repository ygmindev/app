import { useWorkflowResource } from '@lib/frontend/orchestrator/hooks/useWorkflowResource/useWorkflowResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useWorkflowResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useWorkflowResource());

    unmount();
  });
});
