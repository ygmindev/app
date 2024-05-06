import { useUnmount } from '@lib/frontend/core/hooks/useUnmount/useUnmount';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useUnmount });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useUnmount({}));
    expect(result.current).toStrictEqual(true);

    unmount();
  });
});
