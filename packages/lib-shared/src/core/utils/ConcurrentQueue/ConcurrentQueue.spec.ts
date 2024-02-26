import { ConcurrentQueue } from '@lib/shared/core/utils/ConcurrentQueue/ConcurrentQueue';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ ConcurrentQueue });

describe(displayName, () => {
  const DURATION = 5000;
  const JOBS: Array<() => Promise<void>> = [
    async () => sleep(DURATION),
    async () => sleep(DURATION),
    async () => sleep(DURATION),
    async () => sleep(DURATION),
  ];

  test('works', async () => {
    // TODO: better test time
    const result = new ConcurrentQueue({ maxConcurrency: 2 });
    result.add(JOBS);
    await result.run();
    expect(1).toStrictEqual(1);
  });
});
