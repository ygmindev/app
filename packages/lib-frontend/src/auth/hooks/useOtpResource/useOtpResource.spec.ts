import { useOtpResource } from '@lib/frontend/auth/hooks/useOtpResource/useOtpResource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useOtpResource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => useOtpResource());

    unmount();
  });
});
