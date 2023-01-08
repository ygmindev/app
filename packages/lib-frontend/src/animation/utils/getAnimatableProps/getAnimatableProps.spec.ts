import { getAnimatableProps } from '@lib/frontend/animation/utils/getAnimatableProps/getAnimatableProps';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => getAnimatableProps });

describe(displayName, () => {
  test('works', async () => {
    const result = getAnimatableProps({});
    expect(result).toStrictEqual({});
  });
});
