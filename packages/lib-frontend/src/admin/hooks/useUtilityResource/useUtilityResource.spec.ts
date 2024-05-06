import { useUtilityResource } from '@lib/frontend/admin/hooks/useUtilityResource/useUtilityResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useUtilityResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useUtilityResource());

    unmount();
  });
});
