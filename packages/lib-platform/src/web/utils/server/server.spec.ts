import { server } from 'packages/lib-platform/src/web/utils/server/server';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ server });

describe(displayName, () => {
  test('works', async () => {
    const result = await server({});
    expect(result).toStrictEqual({});
  });
});
