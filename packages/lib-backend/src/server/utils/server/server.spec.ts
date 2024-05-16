import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { server } from '@lib/backend/server/utils/server/server';

const { displayName } = withTest({ server });

describe(displayName, () => {
  test('works', async () => {
    const result = await server({});
    expect(result).toStrictEqual({});
  });
});
