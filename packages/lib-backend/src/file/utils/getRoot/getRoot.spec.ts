import { getRoot } from '#lib-backend/file/utils/getRoot/getRoot';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getRoot });

describe(displayName, () => {
  test('works', async () => {
    const result = await getRoot({});
    expect(result).toStrictEqual({});
  });
});
