import { withTest } from '#lib-shared/test/utils/withTest/withTest';

import { isSsr } from '#lib-platform/core/utils/isSsr/isSsr';

const { displayName } = withTest({ isSsr });

describe(displayName, () => {
  test('works', async () => {
    const result = isSsr;
    expect(result).toStrictEqual({});
  });
});
