import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { useLinkedUserResource } from '@lib/frontend/user/hooks/useLinkedUserResource/useLinkedUserResource';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useLinkedUserResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useLinkedUserResource());

    unmount();
  });
});
