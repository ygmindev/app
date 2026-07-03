import { useCopy } from '@lib/frontend/core/useCopy/useCopy';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useCopy });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useCopy({}));
  });
});
