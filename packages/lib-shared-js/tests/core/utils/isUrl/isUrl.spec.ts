import { isUrl } from '@lib/shared/core/utils/isUrl/isUrl';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isUrl });

describe(displayName, () => {
  test('works', async () => {
    const result = await isUrl({});
    expect(result).toStrictEqual({});
  });
});
