import { useRatingAgencyResource } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource';
import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useRatingAgencyResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useRatingAgencyResource());

    unmount();
  });
});
