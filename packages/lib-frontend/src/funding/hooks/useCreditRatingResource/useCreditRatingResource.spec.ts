import { useCreditRatingResource } from '#lib-frontend/funding/hooks/useCreditRatingResource/useCreditRatingResource';
import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useCreditRatingResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useCreditRatingResource());
    Ç;
    unmount();
  });
});