import { useGraphqlSse } from '@lib/frontend/http/hooks/useGraphqlSse/useGraphqlSse';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useGraphqlSse });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useGraphqlSse({}));
  });
});
