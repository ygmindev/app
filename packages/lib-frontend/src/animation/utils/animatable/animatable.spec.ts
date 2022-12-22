import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => animatable });

describe(displayName, () => {
  test('works', async () => {
    // const result = await animatable({ Component: Wrapper });
    // expect(result).toStrictEqual({});
  });
});
