import { useAppPhase } from '@lib/frontend/app/hooks/useAppPhase/useAppPhase';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useAppPhase });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useAppPhase({}));
  });
});
