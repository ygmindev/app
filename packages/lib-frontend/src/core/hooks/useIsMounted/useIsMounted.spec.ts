import { useIsMounted } from '@lib/frontend/core/hooks/useIsMounted/useIsMounted';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useIsMounted });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useIsMounted());
    expect(result.current).toStrictEqual(true);
  });
});
