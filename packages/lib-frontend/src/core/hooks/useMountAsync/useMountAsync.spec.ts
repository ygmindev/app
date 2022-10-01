import { useMountAsync } from '@lib/frontend/core/hooks/useMountAsync/useMountAsync';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useMountAsync });

describe(displayName, () => {
  jest.useFakeTimers();

  const fn = jest.fn();
  const DURATION = 5000;

  test('works', async () => {
    renderHook(() =>
      useMountAsync({ onMount: async () => sleep({ duration: DURATION }), onSuccess: fn }),
    );
    jest.advanceTimersByTime(DURATION);
    expect(fn).toBeCalledTimes(1);
  });
});
