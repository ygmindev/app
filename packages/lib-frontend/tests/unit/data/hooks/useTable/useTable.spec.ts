import { useTable } from '@lib/frontend/data/hooks/useTable/useTable';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useTable });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useTable({}));
  });
});
