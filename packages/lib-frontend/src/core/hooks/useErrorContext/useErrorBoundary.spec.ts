import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useErrorContext });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useErrorContext());

    unmount();
  });
});
