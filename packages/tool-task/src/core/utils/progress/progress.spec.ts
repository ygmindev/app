import { progress } from '#tool-task/core/utils/progress/progress';

import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ progress });

describe(displayName, () => {
  test('works', async () => {
    const result = progress({ name: 'progress' });
    expect(result).toStrictEqual({});
  });
});
