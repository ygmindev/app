import { useDebounce } from '@lib/frontend/core/utils/useDebounce/useDebounce';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useDebounce });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useDebounce({}));
  });
});
