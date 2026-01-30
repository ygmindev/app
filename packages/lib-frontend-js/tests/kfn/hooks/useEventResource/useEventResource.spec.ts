import { useEventResource } from '@lib/frontend/kfn/hooks/useEventResource/useEventResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useEventResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useEventResource());

    unmount();
  });
});
