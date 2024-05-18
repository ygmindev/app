import { renderApp } from '@lib/shared/platform/utils/renderApp/renderApp';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ renderApp });

describe(displayName, () => {
  test('works', async () => {
    const result = await renderApp({});
    expect(result).toStrictEqual({});
  });
});
