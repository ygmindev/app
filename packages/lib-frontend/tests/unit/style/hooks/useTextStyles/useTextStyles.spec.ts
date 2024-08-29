import { useTextStyles } from '@lib/frontend/style/hooks/useTextStyles/useTextStyles';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useTextStyles });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useTextStyles({}));
  });
});
