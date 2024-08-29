import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useResource });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useResource({}));
  });
});
