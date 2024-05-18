import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { render } from '@lib/shared/web/utils/render/render';

const { displayName } = withTest({ renderPage: render });

describe(displayName, () => {
  test('works', async () => {
    const result = await render({});
    expect(result).toStrictEqual({});
  });
});
