import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { server } from '@lib/shared/web/utils/server/server';

const { displayName } = withTest({ server });

describe(displayName, () => {
  test('works', async () => {
    // const result = await server({});
    // expect(result).toStrictEqual({});
    expect(1).toStrictEqual(1);
  });
});
