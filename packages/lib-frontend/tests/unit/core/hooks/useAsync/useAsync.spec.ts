import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useAsync });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useAsync({}));
    expect(result.current).toStrictEqual(true);

    unmount();
  });
});
