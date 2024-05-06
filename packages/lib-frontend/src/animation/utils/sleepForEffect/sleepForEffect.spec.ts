import { sleepForEffect } from '@lib/frontend/animation/utils/sleepForEffect/sleepForEffect';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ sleepForEffect });

describe(displayName, () => {
  test('works', async () => {
    const result = await sleepForEffect();
    expect(result).toStrictEqual({});
  });
});
