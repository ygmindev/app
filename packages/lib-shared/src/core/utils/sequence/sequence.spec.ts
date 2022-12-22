import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { sequence } from '@lib/shared/core/utils/sequence/sequence';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => sequence });

describe(displayName, () => {
  test('works', async () => {
    const PROMISES: Array<CallablePromiseModel<number>> = [
      async () => Promise.resolve(1),
      async () => Promise.resolve(2),
      async () => Promise.resolve(3),
    ];
    const result = await sequence(PROMISES);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
