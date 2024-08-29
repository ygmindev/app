import { useWebsocket } from '@lib/frontend/http/hooks/useWebsocket/useWebsocket';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useWebsocket });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useWebsocket({}));
  });
});
