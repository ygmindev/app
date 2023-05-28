import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';

const { displayName } = withTest({ writeFile });

describe(displayName, () => {
  test('works', async () => {
    const result = await writeFile({});
    expect(result).toStrictEqual({});
  });
});
