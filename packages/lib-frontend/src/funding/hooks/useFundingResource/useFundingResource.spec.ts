import { useFundingResource } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource';
import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useFundingResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useFundingResource());

    unmount();
  });
});
