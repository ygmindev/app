import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { useLinkedUserResource } from '@lib/frontend/user/hooks/useLinkedUserResource/useLinkedUserResource';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useLinkedUserResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useLinkedUserResource());

    unmount();
  });
});
