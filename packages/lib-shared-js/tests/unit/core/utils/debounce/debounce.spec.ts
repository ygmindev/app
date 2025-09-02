import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ debounce });

describe(displayName, () => {
  jest.useFakeTimers();

  const fn = jest.fn<void, Array<undefined>>();
  const TIMES = 10;

  afterEach(async () => {
    jest.clearAllMocks();
  });

  test('no duration', async () => {
    const DURATION = 0;
    const debounced = debounce(fn, { duration: DURATION });
    Array.from(Array(TIMES)).forEach(() => debounced());
    jest.advanceTimersByTime(DURATION);
    expect(fn).toBeCalledTimes(1);
  });

  test('duration', async () => {
    const DURATION = 1000;
    const debounced = debounce(fn, { duration: DURATION });
    Array.from(Array(TIMES)).forEach(() => debounced());
    jest.advanceTimersByTime(DURATION);
    expect(fn).toBeCalledTimes(1);
  });
});
