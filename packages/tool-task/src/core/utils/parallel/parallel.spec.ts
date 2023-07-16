import { withTest } from '#lib-shared/test/utils/withTest/withTest';
import { parallel } from '#tool-task/core/utils/parallel/parallel';

const { displayName } = withTest({ parallel });

describe(displayName, () => {
  test('works', async () => {
    const result = await parallel({});
    expect(result).toStrictEqual({});
  });
});
