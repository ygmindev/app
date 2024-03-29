import { cleanup } from '@lib/backend/setup/utils/cleanup/cleanup';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ cleanup });

describe(displayName, () => {
  test('works', async () => {
    const result = await cleanup({});
    expect(result).toStrictEqual({});
  });
});
