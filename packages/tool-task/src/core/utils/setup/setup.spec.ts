import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { setup } from '@tool/task/core/utils/setup/setup';

const { displayName } = withTest({ target: () => setup });

describe(displayName, () => {
  test('works', async () => {
    const result = await setup({});
    expect(result).toStrictEqual({});
  });
});
