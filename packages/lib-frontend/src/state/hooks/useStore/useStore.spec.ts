import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useStore });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useStore((state) => state));
  });
});
