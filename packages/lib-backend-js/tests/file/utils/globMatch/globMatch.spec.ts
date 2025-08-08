import { globMatch } from '@lib/backend/file/utils/globMatch/globMatch';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ globMatch });

describe(displayName, () => {
  test('works', async () => {
    const result = await globMatch({});
    expect(result).toStrictEqual({});
  });
});
