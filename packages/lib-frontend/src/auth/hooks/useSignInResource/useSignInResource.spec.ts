import { useSignInResourceResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useSignInResourceResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useSignInResourceResource());

    unmount();
  });
});
