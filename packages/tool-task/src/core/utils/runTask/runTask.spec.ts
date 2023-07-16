import { runTask } from '#tool-task/core/utils/runTask/runTask';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ runTask });

describe(displayName, () => {
  test('works', async () => {
    const result = await runTask({});
    expect(result).toStrictEqual({});
  });
});
