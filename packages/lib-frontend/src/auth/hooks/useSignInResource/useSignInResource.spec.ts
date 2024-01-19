import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useSignInResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useSignInResource());

    unmount();
  });
});
