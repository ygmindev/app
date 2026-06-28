import { useChat } from '@lib/frontend/ai/hooks/useChat/useChat';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useChat });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useChat({}));
  });
});
