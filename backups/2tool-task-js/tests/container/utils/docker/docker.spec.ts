import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { docker } from '@tool/task/container/utils/Docker/Docker';

const { displayName } = withTest({ docker });

describe(displayName, () => {
  test('works', async () => {
    const result = await docker({});
    expect(result).toStrictEqual({});
  });
});
