import { useContainer } from '@lib/frontend/core/hooks/useContainer/useContainer';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useContainer });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useContainer({}));
  });
});
