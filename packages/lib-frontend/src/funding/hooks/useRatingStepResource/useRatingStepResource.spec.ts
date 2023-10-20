import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { useRatingStepResource } from '#lib-frontend/funding/hooks/useRatingStepResource/useRatingStepResource';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useRatingStepResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useRatingStepResource());

    unmount();
  });
});
