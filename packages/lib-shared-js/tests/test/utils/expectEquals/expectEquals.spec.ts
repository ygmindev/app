import { expectEquals } from '@lib/shared/test/utils/expectEquals/expectEquals';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ expectEquals });

describe(displayName, () => {
  test('works', async () => {
    const result = await expectEquals({});
    expect(result).toStrictEqual({});
  });
});
