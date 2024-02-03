import { useSpecificationResource } from '@lib/frontend/openapi/hooks/useSpecificationResource/useSpecificationResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useSpecificationResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useSpecificationResource());

    unmount();
  });
});
