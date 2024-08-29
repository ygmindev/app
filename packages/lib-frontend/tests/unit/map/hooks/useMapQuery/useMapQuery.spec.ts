import { useMapQuery } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useMapQuery });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useMapQuery({}));
  });
});
