import { useDividers } from '@lib/frontend/core/hooks/useDividers/useDividers';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useDividers });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useDividers([]));
  });
});
