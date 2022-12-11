import { withTest } from '@lib/shared/testing/utils/withTest/withTest';
import { rename } from '@tool/task/core/utils/rename/rename';

const { displayName } = withTest({ target: () => rename });

describe(displayName, () => {
  test('works', async () => {
    const result = await rename({});
    expect(result).toStrictEqual({});
  });
});
