import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ fileInfo });

describe(displayName, () => {
  test('works', async () => {
    const result = await fileInfo({});
    expect(result).toStrictEqual({});
  });
});
