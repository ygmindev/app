import { useCredentials } from '@lib/frontend/auth/hooks/useCredentials/useCredentials';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useCredentials });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useCredentials({}));
  });
});
