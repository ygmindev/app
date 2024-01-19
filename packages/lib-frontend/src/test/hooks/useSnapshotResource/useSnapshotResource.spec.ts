import { useSnapshotResource } from '@lib/frontend/test/hooks/useSnapshotResource/useSnapshotResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useSnapshotResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useSnapshotResource());

    unmount();
  });
});
