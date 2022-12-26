import { palette } from '@lib/frontend/style/utils/palette/palette';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => palette });

describe(displayName, () => {
  test('works', async () => {
    const result = await palette({});
    expect(result).toStrictEqual({});
  });
});
