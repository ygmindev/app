import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ numberFormat });

describe(displayName, () => {
  test('works', async () => {
    const result = await numberFormat({});
    expect(result).toStrictEqual({});
  });
});
