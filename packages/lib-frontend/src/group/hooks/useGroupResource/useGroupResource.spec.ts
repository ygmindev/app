import { useGroupResource } from '@lib/frontend/group/hooks/useGroupResource/useGroupResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useGroupResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useGroupResource());

    unmount();
  });
});
