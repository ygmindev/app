import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useMount });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useMount({}));
    expect(result.current).toStrictEqual(true);

    unmount();
  });
});
