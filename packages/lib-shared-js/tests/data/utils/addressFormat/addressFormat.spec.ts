import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { addressFormat } from '@lib/shared/data/utils/addressFormat/addressFormat';

const { displayName } = withTest({ addressFormat });

describe(displayName, () => {
  test('works', async () => {
    const result = await addressFormat({});
    expect(result).toStrictEqual({});
  });
});
