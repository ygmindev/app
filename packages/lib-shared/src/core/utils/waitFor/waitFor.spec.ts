import { waitFor } from '@lib/shared/core/utils/waitFor/waitFor';
import {
  WAIT_FOR_INTERVAL_DEFAULT_MILLISECONDS,
  WAIT_FOR_TIMEOUT_DEFAULT_MILLISECONDS,
} from '@lib/shared/core/utils/waitFor/waitFor.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => waitFor });

describe(displayName, () => {
  vi.useFakeTimers();

  test('works', async () => {
    const duration = 1000;
    const condition = vi.fn();
    condition.mockReturnValue(false);
    setTimeout(() => condition.mockReturnValue(true), duration);
    waitFor({ condition });
    vi.advanceTimersByTime(WAIT_FOR_TIMEOUT_DEFAULT_MILLISECONDS);
    expect(condition).toBeCalledTimes(duration / WAIT_FOR_INTERVAL_DEFAULT_MILLISECONDS);
  });

  test('works with timeout', async () => {
    const condition = vi.fn();
    condition.mockReturnValue(false);
    waitFor({ condition });
    vi.advanceTimersByTime(WAIT_FOR_TIMEOUT_DEFAULT_MILLISECONDS);
    expect(condition).toBeCalledTimes(
      WAIT_FOR_TIMEOUT_DEFAULT_MILLISECONDS / WAIT_FOR_INTERVAL_DEFAULT_MILLISECONDS,
    );
  });
});
