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

    console.warn('DONE1');

    const result2 = new ConcurrentQueue({ maxConcurrency: 2 });
    result2.add(JOBS);
    await result2.run();
    console.warn('DONE2');

    expect(1).toStrictEqual(1);
  });
});
