import { argv } from '#tool-task/core/utils/argv/argv';

import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ argv });

describe(displayName, () => {
  test('works', async () => {
    const result = argv({});
    expect(result).toStrictEqual({});
  });
});
