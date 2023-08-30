import { useIssuerResource } from '#lib-frontend/funding/hooks/useIssuerResource/useIssuerResource';
import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useIssuerResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useIssuerResource());

    unmount();
  });
});
