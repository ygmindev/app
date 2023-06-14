import { rename } from '#tool-task/core/utils/rename/rename';

import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ rename });

describe(displayName, () => {
  test('works', async () => {
    const result = await rename({ from: '', path: '', to: '' });
    expect(result).toStrictEqual({});
  });
});
