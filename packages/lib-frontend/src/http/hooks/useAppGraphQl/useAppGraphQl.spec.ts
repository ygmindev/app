import { useAppGraphQl } from '#lib-frontend/http/hooks/useAppGraphQl/useAppGraphQl';
import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useAppGraphQl });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useAppGraphQl({}));
  });
});
