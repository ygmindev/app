import { useOAuth } from '@lib/frontend/auth/hooks/useOAuth/useOAuth';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useOAuth });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useOAuth({}));
  });
});
