import { watchFile } from '@lib/backend/file/utils/watchFile/watchFile';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ watchFile });

describe(displayName, () => {
  test('works', async () => {
    const result = await watchFile({});
    expect(result).toStrictEqual({});
  });
});
