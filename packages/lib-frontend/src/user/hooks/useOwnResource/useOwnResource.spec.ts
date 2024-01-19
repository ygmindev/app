import { useOwnResource } from '@lib/frontend/user/hooks/useOwnResource/useOwnResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useOwnResource });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useOwnResource({}));
  });
});
