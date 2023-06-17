import { exportRoute } from '#lib-platform/web/exports/exportRoute/exportRoute';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ exportRoute });

describe(displayName, () => {
  test('works', async () => {
    const result = await exportRoute({});
    expect(result).toStrictEqual({});
  });
});
