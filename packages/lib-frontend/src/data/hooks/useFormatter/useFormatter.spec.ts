import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useFormatter });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useFormatter({}));
  });
});
