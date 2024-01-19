import { useAccessResource } from '@lib/frontend/auth/hooks/useAccessResource/useAccessResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useAccessResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useAccessResource());

    unmount();
  });
});
