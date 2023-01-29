import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { renderPage } from '@lib/framework/web/utils/renderPage/renderPage';

const { displayName } = withTest({ target: () => renderPage });

describe(displayName, () => {
  test('works', async () => {
    const result = await renderPage({});
    expect(result).toStrictEqual({});
  });
});
