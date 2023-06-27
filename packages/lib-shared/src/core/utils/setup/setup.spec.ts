import { setup } from '#lib-shared/core/utils/setup/setup';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ setup });

describe(displayName, () => {
  test('works', async () => {
    const result = await setup({});
    expect(result).toStrictEqual({});
  });
});
