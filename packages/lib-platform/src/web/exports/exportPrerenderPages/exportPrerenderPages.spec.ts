import { exportPrerenderPages } from '#lib-platform/web/exports/exportPrerenderPages/exportPrerenderPages';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ exportPrerenderPages });

describe(displayName, () => {
  test('works', async () => {
    const result = await exportPrerenderPages({});
    expect(result).toStrictEqual({});
  });
});
