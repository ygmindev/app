import { useAppSse } from '@lib/frontend/http/hooks/useAppSse/useAppSse';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useAppSse });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useAppSse({}));
  });
});
