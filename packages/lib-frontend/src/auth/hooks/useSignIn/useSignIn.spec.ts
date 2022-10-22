import { useSignIn } from '@lib/frontend/auth/hooks/useSignIn/useSignIn';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useSignIn });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useSignIn());

    unmount();
  });
});
