import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useLayoutStyles });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useLayoutStyles({}));
  });
});
