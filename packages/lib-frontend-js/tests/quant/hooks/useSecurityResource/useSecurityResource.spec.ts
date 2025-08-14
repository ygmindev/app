import { useSecurityResource } from '@lib/frontend/quant/hooks/useSecurityResource/useSecurityResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useSecurityResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useSecurityResource());

    unmount();
  });
});
