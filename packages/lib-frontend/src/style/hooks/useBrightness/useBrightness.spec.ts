import { useBrightness } from '@lib/frontend/style/hooks/useBrightness/useBrightness';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useBrightness });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useBrightness({}));
  });
});
