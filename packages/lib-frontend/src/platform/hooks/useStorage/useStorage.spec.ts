import { useStorage } from '@lib/frontend/platform/hooks/useStorage/useStorage';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useStorage });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useStorage({}));
  });
});
