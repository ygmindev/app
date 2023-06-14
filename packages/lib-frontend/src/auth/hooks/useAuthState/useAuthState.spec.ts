import { useAuthState } from '#lib-frontend/auth/hooks/useAuthState/useAuthState';
import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useAuthState });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useAuthState());
  });
});
