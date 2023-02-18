import { slug } from '@lib/frontend/route/utils/slug/slug';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => slug });

describe(displayName, () => {
  test('works', async () => {
    const result = await slug('');
    expect(result).toStrictEqual({});
  });
});
