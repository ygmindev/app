import { useOtpResource } from '@lib/frontend/auth/hooks/useOtpResource/useOtpResource';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useOtpResource });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useOtpResource());
  });
});
