import { sleepForTransition } from '@lib/frontend/animation/utils/sleepForTransition/sleepForTransition';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ sleepForTransition });

describe(displayName, () => {
  test('works', async () => {
    const result = await sleepForTransition();
    expect(result).toStrictEqual({});
  });
});
