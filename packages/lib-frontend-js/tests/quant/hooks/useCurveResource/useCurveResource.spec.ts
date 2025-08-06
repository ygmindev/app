import { useCurveResource } from '@lib/frontend/quant/hooks/useCurveResource/useCurveResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useCurveResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useCurveResource());

    unmount();
  });
});
