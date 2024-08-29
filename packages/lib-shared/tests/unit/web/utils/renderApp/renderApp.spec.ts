import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { renderApp } from '@lib/shared/web/utils/renderApp/renderApp';

const { displayName } = withTest({ renderApp });

describe(displayName, () => {
  test('works', async () => {
    const result = await renderApp({});
    expect(result).toStrictEqual({});
  });
});
