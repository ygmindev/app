import { useIsInitialized } from '@lib/frontend/app/hooks/useIsInitialized/useIsInitialized';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useIsInitialized });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useIsInitialized());

    expect(1).toStrictEqual(1);

    unmount();
  });
});
