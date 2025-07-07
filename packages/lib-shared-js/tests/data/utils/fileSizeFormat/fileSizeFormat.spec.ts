import { fileSizeFormat } from '@lib/shared/data/utils/fileSizeFormat/fileSizeFormat';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ fileSizeFormat });

describe(displayName, () => {
  test('works', async () => {
    const result = await fileSizeFormat({});
    expect(result).toStrictEqual({});
  });
});
