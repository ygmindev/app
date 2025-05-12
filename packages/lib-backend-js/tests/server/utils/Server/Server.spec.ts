import { server } from '@lib/backend/http/utils/Server/Server';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ server });

describe(displayName, () => {
  test('works', async () => {
    const result = await server({});
    expect(result).toStrictEqual({});
  });
});
