import { useVendorResource } from '@lib/frontend/admin/hooks/useVendorResource/useVendorResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useVendorResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useVendorResource());

    unmount();
  });
});
