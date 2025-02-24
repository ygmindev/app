import { useMessageResource } from '@lib/frontend/chat/hooks/useMessageResource/useMessageResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useMessageResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useMessageResource());

    unmount();
  });
});
