import { useAnimation } from '@lib/frontend/animation/hooks/useAnimation/useAnimation';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useAnimation });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useAnimation({}));
  });
});
