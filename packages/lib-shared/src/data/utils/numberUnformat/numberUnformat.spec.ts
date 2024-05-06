import { numberUnformat } from '@lib/shared/data/utils/numberUnformat/numberUnformat';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ numberUnformat });

describe(displayName, () => {
  test('works', async () => {
    const result = await numberUnformat({});
    expect(result).toStrictEqual({});
  });
});
