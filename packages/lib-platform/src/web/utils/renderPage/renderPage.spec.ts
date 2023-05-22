import { renderPage } from '@lib/platform/web/utils/renderPage/renderPage';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ renderPage });

describe(displayName, () => {
  test('works', async () => {
    const result = await renderPage({});
    expect(result).toStrictEqual({});
  });
});
