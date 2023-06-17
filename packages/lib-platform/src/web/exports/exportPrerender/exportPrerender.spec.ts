import { exportPrerender } from '#lib-platform/web/exports/exportPrerender/exportPrerender';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ exportPrerender });

describe(displayName, () => {
  test('works', async () => {
    const result = await exportPrerender({});
    expect(result).toStrictEqual({});
  });
});
