import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useElementStateControlled });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useElementStateControlled({}));
  });
});
