import { useProductResource } from '@lib/frontend/commerce/hooks/useProductResource/useProductResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useProductResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useProductResource());

    unmount();
  });
});
