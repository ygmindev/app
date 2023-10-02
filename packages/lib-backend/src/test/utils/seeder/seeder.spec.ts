import { seeder } from '#lib-backend/test/utils/seeder/seeder';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ seeder });

describe(displayName, () => {
  test('works', async () => {
    const result = await seeder();
    expect(result).toStrictEqual({});
  });
});
