import { useDependencyResource } from '#lib-frontend/admin/hooks/useDependencyResource/useDependencyResource';
import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useDependencyResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useDependencyResource());

    unmount();
  });
});
