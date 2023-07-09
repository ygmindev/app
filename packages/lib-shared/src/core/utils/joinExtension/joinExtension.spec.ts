import { joinExtension } from '#lib-shared/core/utils/joinExtension/joinExtension';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ joinExtension });

describe(displayName, () => {
  test('works', async () => {
    const result = await joinExtension({});
    expect(result).toStrictEqual({});
  });
});
