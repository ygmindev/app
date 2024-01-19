import { render } from '@lib/platform/web/utils/render/render';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ renderPage: render });

describe(displayName, () => {
  test('works', async () => {
    const result = await render({});
    expect(result).toStrictEqual({});
  });
});
