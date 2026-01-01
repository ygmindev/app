import { useAnimationState } from '@lib/frontend/animation/hooks/useAnimationProps/useAnimationProps';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useAnimationState });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useAnimationState({}));
  });
});
