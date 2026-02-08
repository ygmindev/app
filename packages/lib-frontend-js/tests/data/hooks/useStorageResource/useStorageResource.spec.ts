import { useStorageResource } from '@lib/frontend/data/hooks/useStorageResource/useStorageResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useStorageResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useStorageResource());

    unmount();
  });
});
