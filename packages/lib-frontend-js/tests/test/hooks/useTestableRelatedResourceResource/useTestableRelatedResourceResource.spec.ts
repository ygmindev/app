import { useTestableRelatedResourceResource } from '@lib/frontend/test/hooks/useTestableRelatedResourceResource/useTestableRelatedResourceResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useTestableRelatedResourceResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useTestableRelatedResourceResource());

    unmount();
  });
});
