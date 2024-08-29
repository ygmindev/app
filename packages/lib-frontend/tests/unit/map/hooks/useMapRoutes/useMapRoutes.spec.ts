import { useMapRoutes } from '@lib/frontend/map/hooks/useMapRoutes/useMapRoutes';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useMapRoutes });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useMapRoutes({}));
  });
});
