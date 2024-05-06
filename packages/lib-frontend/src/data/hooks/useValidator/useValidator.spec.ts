import { useValidator } from '@lib/frontend/data/hooks/useValidator/useValidator';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useValidator });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useValidator());
  });
});
