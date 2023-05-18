import { docgen } from '@lib/library/docgen/utils/docgen/docgen';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ docgen });

describe(displayName, () => {
  test('works', async () => {
    const result = await docgen({});
    expect(result).toStrictEqual({});
  });
});
