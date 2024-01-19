import { trueTypeOf } from '@lib/shared/core/utils/trueTypeOf/trueTypeOf';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ trueTypeOf });

describe(displayName, () => {
  test('works', async () => {
    const result = await trueTypeOf({});
    expect(result).toStrictEqual({});
  });
});
