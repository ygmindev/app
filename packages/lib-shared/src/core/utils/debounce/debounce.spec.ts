import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => debounce });

describe(displayName, () => {
  vi.useFakeTimers();

  const fn = vi.fn();
  const TIMES = 10;

  afterEach(async () => {
    vi.clearAllMocks();
  });

  test('works with no duration', async () => {
    const DURATION = 0;
    const debounced = debounce({ callback: fn, duration: DURATION });
    Array.from(Array(TIMES)).forEach(() => debounced());
    vi.advanceTimersByTime(DURATION);
    expect(fn).toBeCalledTimes(1);
  });

  test('works with duration', async () => {
    const DURATION = 1000;
    const debounced = debounce({ callback: fn, duration: DURATION });
    Array.from(Array(TIMES)).forEach(() => debounced());
    vi.advanceTimersByTime(DURATION);
    expect(fn).toBeCalledTimes(1);
  });
});
