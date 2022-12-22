import { useAction } from '@lib/frontend/state/hooks/useAction/useAction';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useAction });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useAction());
  });
});
