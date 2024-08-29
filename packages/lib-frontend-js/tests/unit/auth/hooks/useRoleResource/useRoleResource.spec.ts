import { useRoleResource } from '@lib/frontend/auth/hooks/useRoleResource/useRoleResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useRoleResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useRoleResource());

    unmount();
  });
});
