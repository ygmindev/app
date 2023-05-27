import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useActions });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useActions());
  });
});
