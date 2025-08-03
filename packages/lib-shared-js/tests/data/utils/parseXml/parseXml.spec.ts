import { parseXml } from '@lib/shared/data/utils/parseXml/parseXml';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ parseXml });

describe(displayName, () => {
  test('works', async () => {
    const result = await parseXml({});
    expect(result).toStrictEqual({});
  });
});
