import { slug } from '@lib/shared/core/utils/slug/slug';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ slug });

describe(displayName, () => {
  const VALUE = 'testSlugValue';
  test('works', async () => {
    const result = slug(VALUE);
    expect(result).toStrictEqual('test-slug-value');
  });
});
