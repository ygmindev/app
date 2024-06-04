import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { runServer } from '@lib/shared/web/utils/runServer/runServer';

const { displayName } = withTest({ server: runServer });

describe(displayName, () => {
  test('works', async () => {
    // const result = await server({});
    // expect(result).toStrictEqual({});
    expect(1).toStrictEqual(1);
  });
});
