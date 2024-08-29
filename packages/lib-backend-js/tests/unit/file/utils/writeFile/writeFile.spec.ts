import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ writeFile });

describe(displayName, () => {
  test('works', async () => {
    const result = writeFile({ filename: '', value: '' });
    expect(result).toStrictEqual({});
  });
});
