import { useKeyPress } from '@lib/frontend/core/hooks/useKeyPress/useKeyPress';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useKeyPress });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useKeyPress({}));
  });
});
