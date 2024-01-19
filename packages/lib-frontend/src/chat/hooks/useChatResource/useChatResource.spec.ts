import { useChatResource } from '@lib/frontend/chat/hooks/useChatResource/useChatResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useChatResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useChatResource());

    unmount();
  });
});
