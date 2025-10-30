import { useStatic } from '@lib/frontend/data/hooks/useStatic/useStatic';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useStatic });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useStatic({}));
  });
});
