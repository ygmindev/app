import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { progress } from '@tool/task/core/utils/progress/progress';

const { displayName } = withTest({ target: () => progress });

describe(displayName, () => {
  test('works', async () => {
    const result = await progress();
    expect(result).toStrictEqual({});
  });
});
