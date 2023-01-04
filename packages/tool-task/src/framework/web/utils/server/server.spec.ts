import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { server } from '@tool/task/framework/web/utils/server/server';

const { displayName } = withTest({ target: () => server });

describe(displayName, () => {
  test('works', async () => {
    const result = await server({});
    expect(result).toStrictEqual({});
  });
});
