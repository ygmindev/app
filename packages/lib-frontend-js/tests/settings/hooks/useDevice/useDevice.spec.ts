import { useDevice } from '@lib/frontend/settings/hooks/useDevice/useDevice';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useDevice });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useDevice({}));
  });
});
