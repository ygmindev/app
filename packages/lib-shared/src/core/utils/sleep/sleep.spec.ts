import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ sleep });

describe(displayName, () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  const SLEEP_DURATION_MILLISECONDS = 5000;

  test('works', async () => {
    await sleep(SLEEP_DURATION_MILLISECONDS);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), SLEEP_DURATION_MILLISECONDS);
  });
});
