import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { cleanup } from '@service/server/setup/utils/cleanup/cleanup';

const { displayName } = withTest({ cleanup });

describe(displayName, () => {
  test('works', async () => {
    const result = await cleanup();
    expect(result).toStrictEqual({});
  });
});
