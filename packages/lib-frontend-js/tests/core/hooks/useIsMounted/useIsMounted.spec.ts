import { useIsMounted } from '@lib/frontend/core/hooks/useIsMounted/useIsMounted';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useIsMounted });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useIsMounted({}));
  });
});
