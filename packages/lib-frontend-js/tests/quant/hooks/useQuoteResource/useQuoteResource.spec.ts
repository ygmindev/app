import { useQuoteResource } from '@lib/frontend/quant/hooks/useQuoteResource/useQuoteResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useQuoteResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useQuoteResource());

    unmount();
  });
});
