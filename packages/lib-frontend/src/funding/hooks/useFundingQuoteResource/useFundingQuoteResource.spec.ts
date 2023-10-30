import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { useFundingQuoteResource } from '#lib-frontend/funding/hooks/useFundingQuoteResource/useFundingQuoteResource';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useFundingQuoteResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useFundingQuoteResource());

    unmount();
  });
});
