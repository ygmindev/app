import { server } from '@lib/framework/web/utils/server/server';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => server });

describe(displayName, () => {
  test('works', async () => {
    const result = await server({});
    expect(result).toStrictEqual({});
  });
});
