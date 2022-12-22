import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useStore });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useStore({}));
  });
});
