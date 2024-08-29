import { isAsyncText } from '@lib/frontend/core/utils/isAsyncText/isAsyncText';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isAsyncText });

describe(displayName, () => {
  test('works', async () => {
    const result = await isAsyncText({});
    expect(result).toStrictEqual({});
  });
});
