import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useBankResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useBankResource());

    unmount();
  });
});
