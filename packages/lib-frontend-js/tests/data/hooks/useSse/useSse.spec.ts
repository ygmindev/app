import { useSse } from '@lib/frontend/http/hooks/useSse/useSse';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useSse });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useSse({}));
  });
});
