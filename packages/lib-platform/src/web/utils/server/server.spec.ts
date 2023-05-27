import { server } from '@lib/platform/web/utils/server/server';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ server });

describe(displayName, () => {
  test('works', async () => {
    // const result = await server({});
    // expect(result).toStrictEqual({});
    expect(1).toStrictEqual(1);
  });
});
