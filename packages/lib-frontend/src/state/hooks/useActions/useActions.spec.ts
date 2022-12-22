import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useActions });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useActions());
  });
});
