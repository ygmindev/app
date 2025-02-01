import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { webTasks } from '@tool/task/web/utils/webTasks/webTasks';

const { displayName } = withTest({ webTasks });

describe(displayName, () => {
  test('works', async () => {
    const result = await webTasks({});
    expect(result).toStrictEqual({});
  });
});
