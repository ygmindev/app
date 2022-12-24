import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useUserResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useUserResource());

    unmount();
  });
});
