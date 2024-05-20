import { runServer } from '@lib/backend/server/utils/runServer/runServer';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ server: runServer });

describe(displayName, () => {
  test('works', async () => {
    const result = await runServer({});
    expect(result).toStrictEqual({});
  });
});
