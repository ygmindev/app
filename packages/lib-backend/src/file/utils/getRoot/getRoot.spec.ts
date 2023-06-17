import { withTest } from '#lib-shared/test/utils/withTest/withTest';
import { getRoot } from '#lib-backend/file/utils/getRoot/getRoot';

const { displayName } = withTest({ getRoot });

describe(displayName, () => {
  test('works', async () => {
    const result = await getRoot({});
    expect(result).toStrictEqual({});
  });
});
