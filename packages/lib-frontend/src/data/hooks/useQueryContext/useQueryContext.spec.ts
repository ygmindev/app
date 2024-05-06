import { useQueryContext } from '@lib/frontend/data/hooks/useQueryContext/useQueryContext';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useQueryContext });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useQueryContext({}));
  });
});
