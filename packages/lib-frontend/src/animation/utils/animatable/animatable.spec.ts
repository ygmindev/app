import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ animatable });

describe(displayName, () => {
  test('works', async () => {
    // const result = await animatable({ Component: Wrapper });
    // expect(result).toStrictEqual({});
  });
});
