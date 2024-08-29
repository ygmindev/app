import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ PubSub });

describe(displayName, () => {
  test('works', async () => {
    const result = await PubSub({});
    expect(result).toStrictEqual({});
  });
});
