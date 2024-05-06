import { updateArray } from '@lib/shared/core/utils/updateArray/updateArray';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ updateArray });

describe(displayName, () => {
  test('works', async () => {
    const result = await updateArray({});
    expect(result).toStrictEqual({});
  });
});
