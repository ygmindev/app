import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { docgen } from '@lib/library/docgen/utils/docgen/docgen';

const { displayName } = withTest({ target: () => docgen });

describe(displayName, () => {
  test('works', async () => {
    const result = await docgen({});
    expect(result).toStrictEqual({});
  });
});
