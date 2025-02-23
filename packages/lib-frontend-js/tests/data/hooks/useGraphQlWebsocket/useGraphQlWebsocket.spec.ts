import { useGraphQlWebsocket } from '@lib/frontend/data/hooks/useGraphQlWebsocket/useGraphQlWebsocket';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useGraphQlWebsocket });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useGraphQlWebsocket({}));
  });
});
