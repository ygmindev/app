import { useValueScaled } from '@lib/frontend/data/hooks/useValueScaled/useValueScaled';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useValueScaled });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useValueScaled({}));
  });
});
