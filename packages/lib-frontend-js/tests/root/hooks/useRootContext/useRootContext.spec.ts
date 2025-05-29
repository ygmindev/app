import { useRootContext } from '@lib/frontend/root/hooks/useRootContext/useRootContext';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useRootContext });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useRootContext({}));
  });
});
