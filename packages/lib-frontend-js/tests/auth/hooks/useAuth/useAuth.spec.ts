import { useAuth } from '@lib/frontend/auth/hooks/useAuth/useAuth';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useAuth });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useAuth({}));
  });
});
